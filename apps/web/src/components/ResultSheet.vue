<script setup lang="ts">
import { matchState } from '@cuu-dinh/shared'
import { computed } from 'vue'

const emit = defineEmits<{ retry: []; home: [] }>()

const won = computed(() => matchState.phase === 'won')
const title = computed(() => (won.value ? 'Đan Thành!' : 'Đan Kiếp Giáng'))
const detail = computed(() => {
  if (won.value) return 'Linh đan Mộc đạt Phàm phẩm viên mãn. Lô khói lượn thành mây lành.'
  return matchState.lossReason === 'shattered'
    ? 'Linh đan bể — ngũ hành nghịch loạn, đan khí tán vào hư không.'
    : 'Hết ván mà phẩm cấp chưa viên mãn. Đan lô nguội dần.'
})
</script>

<template>
  <div class="fixed inset-0 z-20 flex items-end bg-black/60" @click.self="emit('home')">
    <div class="w-full rounded-t-3xl border-t border-stone-700 bg-stone-900 px-6 pb-8 pt-6 text-center">
      <div class="mx-auto mb-4 h-1 w-10 rounded-full bg-stone-700" />
      <h2 class="text-3xl font-bold" :class="won ? 'text-amber-300' : 'text-red-400'">{{ title }}</h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-400">{{ detail }}</p>
      <div class="mt-4 flex justify-center gap-6 text-xs text-stone-500">
        <span>Va chạm: <b class="text-stone-300">{{ matchState.hits }}</b></span>
        <span>Bạo kích: <b class="text-amber-300">{{ matchState.crits }}</b></span>
        <span>Phẩm: <b class="text-amber-300">{{ Math.max(matchState.quality, 0).toFixed(0) }}%</b></span>
      </div>
      <div class="mt-6 flex gap-3">
        <button class="flex-1 rounded-xl border border-stone-700 py-3 font-bold text-stone-300 active:scale-95" @click="emit('home')">
          Về Đạo Quán
        </button>
        <button
          class="flex-1 rounded-xl bg-gradient-to-b from-amber-500 to-amber-700 py-3 font-bold text-stone-950 active:scale-95"
          @click="emit('retry')"
        >
          Khai Lô Lần Nữa
        </button>
      </div>
    </div>
  </div>
</template>
