<template>
  <a-layout-header class="the-header flex z-10 justify-between min-h-[70px]">
    <div class="flex items-center">
      <app-burger />
      <app-date class="ml-[30px]" />
    </div>
    <div class="flex items-center">
      <app-user-info />
    </div>
  </a-layout-header>
</template>

<style lang="scss">
.the-header {
  padding: 0 20px;
}
</style>
