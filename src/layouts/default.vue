<template>
  <a-layout class="default-layout">
    <the-header />
    <a-layout>
      <the-side-bar />
      <a-layout-content class="bg-blue-950">
        <slot />
      </a-layout-content>
    </a-layout>
    <app-add-entry class="absolute right-[20px] bottom-[20px]" />
  </a-layout>
</template>

<style lang="scss">
.default-layout {
  height: 100vh;
}
</style>
