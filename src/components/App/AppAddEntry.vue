<template>
  <router-link
    to="/new-entry"
    class="app-add-entry"
  >
    <a-button
      type="primary"
      shape="circle"
      size="large"
      class="app-add-entry__button"
    >
      <template #icon>
        <plus-outlined />
      </template>
    </a-button>
  </router-link>
</template>

<script setup lang="ts"></script>
<style lang="scss">
.ant-btn.app-add-entry__button {
  width: 50px;
  height: 50px;
}
</style>
