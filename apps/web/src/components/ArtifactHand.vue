<script setup lang="ts">
import { ARTIFACTS, ELEMENT_GLYPH, MAX_PLACED_ARTIFACTS, matchState } from '@cuu-dinh/shared'
import { computed } from 'vue'
import { ELEMENT_COLOR_CSS } from '../match/element-colors'
import { placedCount, placementState } from '../match/placement-state'

const emit = defineEmits<{ startRound: [] }>()

const isSetup = computed(() => matchState.phase === 'setup')

function tapCard(id: string): void {
  if (!isSetup.value) return
  if (placementState.selectedId === id) {
    placementState.selectedId = null
  } else if (id in placementState.placed) {
    // Nhấc khỏi board về tay
    delete placementState.placed[id]
    placementState.selectedId = null
  } else {
    placementState.selectedId = id
  }
}
</script>

<template>
  <div class="space-y-2 px-3 pb-4 pt-2">
    <div class="flex items-center justify-between text-[11px] text-stone-500">
      <span v-if="isSetup">
        Đặt linh khí ({{ placedCount() }}/{{ MAX_PLACED_ARTIFACTS }}) — chọn rồi chạm anchor
      </span>
      <span v-else>Linh lực đang rơi…</span>
    </div>
    <div class="flex gap-1.5 overflow-x-auto pb-1">
      <button
        v-for="artifact in ARTIFACTS"
        :key="artifact.id"
        class="flex min-h-11 min-w-14 flex-col items-center rounded-lg border px-1 py-1.5 transition-all"
        :class="[
          placementState.selectedId === artifact.id
            ? 'scale-105 border-amber-400 bg-stone-800'
            : artifact.id in placementState.placed
              ? 'border-stone-600 bg-stone-800/80 opacity-60'
              : 'border-stone-700 bg-stone-900',
          !isSetup && 'pointer-events-none opacity-40',
        ]"
        @click="tapCard(artifact.id)"
      >
        <span class="text-base font-bold" :style="{ color: ELEMENT_COLOR_CSS[artifact.element] }">
          {{ ELEMENT_GLYPH[artifact.element] }}
        </span>
        <span class="mt-0.5 w-16 truncate text-[9px] leading-tight text-stone-400">{{ artifact.ten }}</span>
      </button>
    </div>
    <button
      class="w-full rounded-xl py-3 text-base font-bold transition-all active:scale-95"
      :class="isSetup ? 'bg-gradient-to-b from-amber-500 to-amber-700 text-stone-950' : 'bg-stone-800 text-stone-600'"
      :disabled="!isSetup"
      @click="emit('startRound')"
    >
      {{ matchState.bossRound ? 'Nghênh Dị Tượng' : `Khai Ván ${matchState.round}` }}
    </button>
  </div>
</template>
