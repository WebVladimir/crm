<template>
  <p>product {{ id }}</p>
</template>

<script setup>
definePageMeta({
  validate: (route) => {
    if (/^\d+$/.test(String(route.params.id))) {
      return true
    } else {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
    }
  },
})

const { id } = useRoute().params
</script>
