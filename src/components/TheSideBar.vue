<template>
  <a-layout-sider
    width="300px"
    class="the-side-bar p-[20px]"
    :collapsed="store.isOpen"
  >
    <the-menu />
  </a-layout-sider>
</template>

<script setup>
import { useStoreSideBar } from "~/stores/useStoreSideBar"

const store = useStoreSideBar()
</script>

<style lang="scss">
.the-side-bar {
  z-index: 1;

  box-shadow: 0 2px 0 0 rgb(255 255 255 / 100%) inset;
}
</style>
