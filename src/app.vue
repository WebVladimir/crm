<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Nuxt 3",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : "Nuxt 3"
  },
})
</script>
