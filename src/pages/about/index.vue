<template>
  <div>
    <div>counter {{ counter }}</div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "about",
})

useHead({
  titleTemplate: "%s - About",
})

const counter = useAppCounter()
</script>
