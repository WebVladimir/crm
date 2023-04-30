<template>
  <a-card
    style="width: 500px"
    class="app-card"
  >
    <slot />
  </a-card>
</template>

<style lang="scss">
.app-card {
  padding: 20px 30px;

  border-radius: 10px;
}

.app-card > .ant-card-body {
  padding: 0;
}
</style>
