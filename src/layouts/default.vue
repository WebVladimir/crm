<template>
  <a-layout class="default-layout">
    <the-header />
    <a-layout>
      <the-side-bar />
      <a-layout-content>
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss">
.default-layout {
  height: 100vh;
}
</style>
