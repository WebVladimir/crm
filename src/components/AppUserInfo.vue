<template>
  <a-dropdown
    :trigger="['click']"
    class="app-user-info"
  >
    <div
      class="flex items-center justify-center cursor-pointer"
      @click.prevent
    >
      <app-avatar />
      <div class="text-gray-300 ml-[20px] flex items-center">
        <p class="uppercase m-0">
          username
        </p>
        <DownOutlined class="ml-[10px]" />
      </div>
    </div>

    <template #overlay>
      <a-menu>
        <a-menu-item
          key="0"
          class="app-user-info__menu-item"
        >
          <router-link
            to="/profile"
            class="font-medium"
          >
            Профиль
          </router-link>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item
          key="1"
          class="app-user-info__menu-item"
        >
          <router-link
            to="/login"
            class="font-medium"
          >
            Выйти
          </router-link>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script setup lang="ts"></script>

<style lang="scss">
.app-user-info__menu-item {
  padding: 8px 10px;
}
</style>
