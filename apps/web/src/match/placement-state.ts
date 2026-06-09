/**
 * State đặt linh khí (setup phase) — @vue/reactivity standalone để
 * ArtifactHand.vue (DOM) và match-controller (Pixi) cùng đọc/ghi.
 */
import { MAX_PLACED_ARTIFACTS } from '@cuu-dinh/shared'
import { reactive } from '@vue/reactivity'

export interface PlacementState {
  /** Linh khí đang chọn trong hand (chờ tap anchor). */
  selectedId: string | null
  /** artifactId → anchor index đã đặt. */
  placed: Record<string, number>
}

export const placementState: PlacementState = reactive({
  selectedId: null,
  placed: {},
})

export function placedCount(): number {
  return Object.keys(placementState.placed).length
}

export function canPlaceMore(): boolean {
  return placedCount() < MAX_PLACED_ARTIFACTS
}

export function resetPlacement(): void {
  placementState.selectedId = null
  placementState.placed = {}
}
