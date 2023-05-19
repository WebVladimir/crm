<template>
  <client-only>
    <a-form-item
      class="app-input"
      :label="label"
    >
      <a-input-password
        class="h-[40px]"
        :placeholder="placeholder"
        @change="emits('update:modelValue', $event.target.value)"
      />
    </a-form-item>
  </client-only>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"])
defineProps({
  placeholder: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
})
</script>

<style lang="scss">
.ant-input-password {
  border-radius: 8px;
}
</style>
