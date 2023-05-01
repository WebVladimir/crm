<template>
  <a-layout-header class="the-header">
    <div class="the-header__block">
      <app-burger />
      <app-date class="ml-[30px]" />
    </div>
    <div class="the-header__block" />
  </a-layout-header>
</template>

<style lang="scss">
.the-header {
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  padding: 0 20px;
}

.the-header__block {
  display: flex;
  align-items: center;
}
</style>
