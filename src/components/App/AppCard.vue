<template>
  <a-card
    style="width: 500px"
    class="app-card"
  >
    <div :style="styles.header">
      <slot name="header" />
    </div>
    <div :style="styles.body">
      <slot name="body" />
    </div>
    <div>
      <slot name="footer" />
    </div>
  </a-card>
</template>

<script setup>
const props = defineProps({
  headerMargin: {
    type: String,
    required: false,
    default: "0",
  },
  bodyMargin: {
    type: String,
    required: false,
    default: "0",
  },
})

const styles = computed(() => {
  return {
    header: {
      margin: `${props.headerMargin}px`,
    },
    body: {
      margin: `${props.bodyMargin}px`,
    },
  }
})
</script>

<style lang="scss">
.app-card {
  padding: 20px 30px;

  border-radius: 10px;
}

.app-card > .ant-card-body {
  padding: 0;
}
</style>
