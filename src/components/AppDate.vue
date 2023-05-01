<template>
  <div class="app-date text-gray-400 text-base">
    {{ getDate }}
  </div>
</template>

<script setup>
import { useDateFilter } from "~/composables/useDateFilter"

const inrterval = ref(null)
const date = ref(new Date())

const getDate = computed(() => {
  return useDateFilter(date.value, "date")
})

onMounted(() => {
  inrterval.value = setInterval(() => {
    date.value = new Date()
  }, 1000)
})

onDeactivated(() => {
  clearInterval(inrterval.value)
})
</script>
