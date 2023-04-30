<template>
  <div>Главная страница</div>
</template>

<script setup>
import { storeToRefs } from "pinia"

// example fetch
const { $api } = useNuxtApp()
const { pending, data } = await useLazyAsyncData(() => {
  return $api.todos.getById({ id: 1 })
})

// example composables
const counter = useAppCounter()

function upCounter() {
  return (counter.value += 1)
}

// example pinia stores
const store = useStoreCounter()
const { increment: upCounterStore } = store
const { count, name, doubleCount } = storeToRefs(store)
</script>
