<script setup lang="ts">
import { ELEMENT_DISPLAY, matchState } from '@cuu-dinh/shared'
import { computed } from 'vue'

const qualityPct = computed(() => Math.max(matchState.quality, 0).toFixed(1))
const qualityWidth = computed(() => `${Math.min(Math.max(matchState.quality, 0), 100)}%`)
const stabilityWidth = computed(() => `${Math.min(Math.max(matchState.stability, 0), 100)}%`)
const roundLabel = computed(() =>
  matchState.bossRound ? 'Dị Tượng · Cuồng Phong' : `Ván ${matchState.round}/${matchState.roundCount}`,
)
</script>

<template>
  <div class="space-y-1.5 px-4 pb-2 pt-3">
    <div class="flex items-center justify-between text-xs text-stone-400">
      <span :class="{ 'font-bold text-red-400': matchState.bossRound }">{{ roundLabel }}</span>
      <span>Linh đan {{ ELEMENT_DISPLAY[matchState.elixirElement] }} · Phàm phẩm</span>
      <span>Linh lực: {{ matchState.orbsQueued + matchState.orbsAlive }}</span>
    </div>
    <div>
      <div class="flex justify-between text-[11px] text-stone-500">
        <span>Phẩm cấp</span>
        <span class="text-amber-300">{{ qualityPct }} / {{ matchState.targetQuality }}%</span>
      </div>
      <div class="h-2 overflow-hidden rounded-full bg-stone-800">
        <div class="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-300 transition-all" :style="{ width: qualityWidth }" />
      </div>
    </div>
    <div>
      <div class="flex justify-between text-[11px] text-stone-500">
        <span>Ổn định</span>
        <span :class="matchState.stability < 30 ? 'animate-pulse font-bold text-red-400' : 'text-sky-300'">
          {{ matchState.stability.toFixed(0) }}
        </span>
      </div>
      <div class="h-2 overflow-hidden rounded-full bg-stone-800">
        <div class="h-full rounded-full bg-gradient-to-r from-red-500 via-sky-500 to-sky-300 transition-all" :style="{ width: stabilityWidth }" />
      </div>
    </div>
  </div>
</template>
