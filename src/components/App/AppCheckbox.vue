<template>
  <a-form-item>
    <a-checkbox @change="emits('update:modelValue', $event.target.checked)">
      <router-link :to="props.url">
        <slot />
      </router-link>
    </a-checkbox>
  </a-form-item>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    default: "/agreement",
  },
})
const emits = defineEmits(["update:modelValue"])
</script>
