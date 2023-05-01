<template>
  <div class="app-date text-gray-400 text-base">
    {{ useDateFilter(date, "date") }}
  </div>
</template>

<script setup>
import { useDateFilter } from "~/composables/useDateFilter"

const inrterval = ref(null)
const date = ref(new Date())

onMounted(() => {
  inrterval.value = setInterval(() => {
    date.value = new Date()
  }, 1000)
})

onDeactivated(() => {
  clearInterval(inrterval.value)
})
</script>
