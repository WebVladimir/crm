<template>
  <div>Secret Page</div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
})
</script>
