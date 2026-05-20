---
id: modal-patterns
ten: Modal Cảnh Báo
type: screen
screenKind: both
navigation: []
firstSeenIn: act-1
---

# Modal Cảnh Báo (`modal-patterns`)

## Identity

Standardized modal dialog patterns used across all screens. Two types: confirmation modal (dangerous actions like Phong Ấn) and error/failure modal (Linh Đan Bể). Not a standalone screen — overlay pattern.

## Layout principles

### Confirmation modal
- Warning icon + title
- Explanation text
- Outcome probabilities (for gambling actions)
- First-time: 3-second delay before confirm button enabled
- [Tiếp tục] / [Huỷ] buttons

### Error/failure modal
- Failure title (e.g. "LINH ĐAN BỂ")
- What was lost
- What is safe (Lò + Cấp + Stash)
- Single [Quay về camp] button

### Visual style
- Ornate warning dialog frame border with talisman seal corners
- Failure variant: shattered cracked frame, dark mournful red
