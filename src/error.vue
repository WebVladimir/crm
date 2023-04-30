<template>
  <div>
    <p>Error</p>
    <p>{{ props.error.statusMessage }}</p>
    <button @click="handlerError">
      Home
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
})

const handlerError = () => clearError({ redirect: "/" })
</script>
