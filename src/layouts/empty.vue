<template>
  <a-layout class="empty-layout">
    <a-layout-content class="flex justify-center items-center">
      <slot />
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss">
.empty-layout {
  height: 100vh;

  background: #454545;
}
</style>
