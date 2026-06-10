<script setup lang="ts">
import { matchState } from '@cuu-dinh/shared'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { MatchController } from '../match/match-controller'
import { useGameStore } from '../stores/game-store'
import ArtifactHand from './ArtifactHand.vue'
import MatchHud from './MatchHud.vue'
import ResultSheet from './ResultSheet.vue'

const store = useGameStore()
const canvasHost = ref<HTMLDivElement | null>(null)
const ready = ref(false)
const controller = new MatchController()

const showResult = computed(() => matchState.phase === 'won' || matchState.phase === 'lost')

watch(showResult, (done) => {
  if (done) store.recordResult(matchState.phase === 'won')
})

onMounted(async () => {
  if (!canvasHost.value) return
  await controller.init(canvasHost.value)
  ready.value = true
})

onBeforeUnmount(() => controller.destroy())
</script>

<template>
  <div class="flex flex-1 flex-col">
    <MatchHud />
    <div ref="canvasHost" class="relative mx-auto w-full flex-1 overflow-hidden">
      <div v-if="!ready" class="absolute inset-0 flex items-center justify-center text-sm text-stone-500">
        Bày pháp trận…
      </div>
    </div>
    <ArtifactHand @start-round="controller.startRound()" />
    <ResultSheet v-if="showResult" @retry="controller.startMatch()" @home="store.exitToHome()" />
  </div>
</template>
