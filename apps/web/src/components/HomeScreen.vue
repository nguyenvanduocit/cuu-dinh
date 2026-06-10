<script setup lang="ts">
import { useGameStore } from '../stores/game-store'

const store = useGameStore()
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-between px-8 py-14 text-center">
    <div class="mt-10">
      <p class="text-sm tracking-[0.5em] text-stone-500">丹劫</p>
      <h1 class="mt-3 bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-5xl font-bold text-transparent">
        Đan Kiếp
      </h1>
      <p class="mt-6 text-sm leading-relaxed text-stone-400">
        Linh lực rơi từ trời. Đặt linh khí hứng.<br />
        Luyện linh đan qua chín lần phong ấn — đổi vận mệnh.
      </p>
    </div>

    <div class="w-full space-y-4">
      <div class="flex justify-center gap-8 text-xs text-stone-500">
        <span>Đan thành: <b class="text-amber-300">{{ store.refinedElixirs }}</b></span>
        <span>Đan kiếp: <b class="text-red-400">{{ store.calamities }}</b></span>
      </div>
      <button
        class="w-full rounded-xl bg-gradient-to-b from-amber-500 to-amber-700 py-4 text-lg font-bold text-stone-950 active:scale-95"
        @click="store.enterMatch()"
      >
        Khai Lô Luyện Đan
      </button>
      <p class="text-xs text-stone-600">Pháp Trận Tiêu Chuẩn · T1 · Linh đan Mộc · Phàm phẩm</p>
    </div>
  </div>
</template>
