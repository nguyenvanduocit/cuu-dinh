#!/usr/bin/env python3
"""
generate-game-art renderer — gọi gpt-image-2 TRỰC TIẾP qua CLI image API
(OpenAI-compatible /v1/images/generations). Embedded từ codex-image; thêm
--prompt-file để orchestrator truyền prompt prose dài an toàn (positional arg
vỡ ở special char của câu nền magenta + STYLE DNA).

Endpoint + api_key đọc từ ~/.config/codex-image/config.json
({"endpoint": "...", "api_key": "..."}), override bằng env
CODEX_IMAGE_URL / CODEX_IMAGE_KEY. Đây là Tailnet CLI image proxy — KHÔNG phải
api.openai.com; máy phải on Tailscale để tới được. Key không bao giờ in ra.

Có --ref → gọi /v1/images/edits (multipart, giữ nhân vật / chỉnh ảnh sẵn);
không có → /v1/images/generations. Cả hai đã verify chạy trên endpoint với
gpt-image-2 (2026-05-23).

Usage:
    python3 generate.py --prompt-file /tmp/cuu-dinh-fire-essence-v1.txt -o out.png
    python3 generate.py "a jade alchemy bell" --size 1024x1536
    python3 generate.py --prompt-file p.txt -o v2.png --ref art/concept-v1.png
"""

import argparse, base64, json, mimetypes, os, sys, urllib.request, urllib.error, uuid

CONFIG = os.path.expanduser("~/.config/codex-image/config.json")
DEFAULT_MODEL = "gpt-image-2"


def load_config() -> tuple[str, str]:
    cfg = {}
    if os.path.exists(CONFIG):
        with open(CONFIG) as f:
            cfg = json.load(f)
    endpoint = os.environ.get("CODEX_IMAGE_URL") or cfg.get("endpoint")
    api_key = os.environ.get("CODEX_IMAGE_KEY") or cfg.get("api_key")
    if not endpoint or not api_key:
        sys.exit(
            f"missing endpoint/api_key — set them in {CONFIG} or CODEX_IMAGE_URL/CODEX_IMAGE_KEY"
        )
    return endpoint.rstrip("/"), api_key


def _post(url: str, key: str, data: bytes, ctype: str) -> list[dict]:
    req = urllib.request.Request(
        url,
        data=data,
        headers={"Authorization": f"Bearer {key}", "Content-Type": ctype},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=300) as r:
        return json.load(r)["data"]


def generate(
    endpoint: str, key: str, prompt: str, n: int, model: str, size: str | None
) -> list[dict]:
    payload = {"model": model, "prompt": prompt, "n": n}
    if size:
        payload["size"] = size
    return _post(
        f"{endpoint}/v1/images/generations",
        key,
        json.dumps(payload).encode(),
        "application/json",
    )


def edit(
    endpoint: str,
    key: str,
    prompt: str,
    n: int,
    model: str,
    size: str | None,
    refs: list[str],
) -> list[dict]:
    boundary = "----gga" + uuid.uuid4().hex
    body = bytearray()

    def field(name: str, value: str) -> None:
        body.extend(
            f'--{boundary}\r\nContent-Disposition: form-data; name="{name}"\r\n\r\n{value}\r\n'.encode()
        )

    def filepart(name: str, path: str) -> None:
        mime = mimetypes.guess_type(path)[0] or "image/png"
        body.extend(
            f'--{boundary}\r\nContent-Disposition: form-data; name="{name}"; filename="{os.path.basename(path)}"\r\nContent-Type: {mime}\r\n\r\n'.encode()
        )
        with open(path, "rb") as f:
            body.extend(f.read())
        body.extend(b"\r\n")

    fields = {"model": model, "prompt": prompt, "n": str(n)}
    if size:
        fields["size"] = size
    for k, v in fields.items():
        field(k, v)
    for p in refs:
        filepart("image[]", p)
    body.extend(f"--{boundary}--\r\n".encode())
    return _post(
        f"{endpoint}/v1/images/edits",
        key,
        bytes(body),
        f"multipart/form-data; boundary={boundary}",
    )


def main() -> None:
    ap = argparse.ArgumentParser(
        description="Render images via the CLI image API (gpt-image-2 by default)."
    )
    ap.add_argument(
        "prompt", nargs="?", help="prompt text (bỏ qua nếu dùng --prompt-file)"
    )
    ap.add_argument("--prompt-file", help="đọc prompt từ file (ưu tiên hơn positional)")
    ap.add_argument("-n", type=int, default=1, help="number of images")
    ap.add_argument(
        "-o", "--out", default="codex-image.png", help="output path (base for n>1)"
    )
    ap.add_argument(
        "--model", default=DEFAULT_MODEL, help=f"image model (default {DEFAULT_MODEL})"
    )
    ap.add_argument("--size", default=None, help="e.g. 1024x1024, 1024x1536, 1536x1024")
    ap.add_argument(
        "--ref",
        action="append",
        default=[],
        help="ảnh reference (lặp được, tối đa 16) → dùng /v1/images/edits",
    )
    args = ap.parse_args()

    if args.prompt_file:
        with open(args.prompt_file) as f:
            prompt = f.read().strip()
    elif args.prompt:
        prompt = args.prompt
    else:
        ap.error("cần prompt: truyền positional hoặc --prompt-file")
    if not prompt:
        sys.exit("prompt rỗng")

    if len(args.ref) > 16:
        sys.exit("tối đa 16 ảnh reference")
    for p in args.ref:
        if not os.path.exists(p):
            sys.exit(f"ref không tồn tại: {p}")

    endpoint, key = load_config()
    try:
        if args.ref:
            data = edit(endpoint, key, prompt, args.n, args.model, args.size, args.ref)
        else:
            data = generate(endpoint, key, prompt, args.n, args.model, args.size)
    except urllib.error.HTTPError as e:
        sys.exit(f"HTTP {e.code}: {e.read().decode('utf-8', 'replace')[:600]}")

    base, ext = os.path.splitext(args.out)
    for i, img in enumerate(data):
        path = args.out if len(data) == 1 else f"{base}-{i + 1}{ext or '.png'}"
        os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
        if img.get("b64_json"):
            with open(path, "wb") as f:
                f.write(base64.b64decode(img["b64_json"]))
            print(f"saved: {path}")
        elif img.get("url"):
            print(f"url: {img['url']}")
        else:
            sys.exit("response had no b64_json or url")


if __name__ == "__main__":
    main()
