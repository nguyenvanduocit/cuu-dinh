<script setup lang="ts">
import { storeToRefs } from 'pinia'
import HomeScreen from './components/HomeScreen.vue'
import MatchScreen from './components/MatchScreen.vue'
import { useGameStore } from './stores/game-store'

const store = useGameStore()
const { screen } = storeToRefs(store)
</script>

<template>
  <div class="mx-auto flex h-dvh max-w-md flex-col bg-stone-950 text-stone-200">
    <HomeScreen v-if="screen === 'home'" />
    <MatchScreen v-else />
  </div>
</template>
