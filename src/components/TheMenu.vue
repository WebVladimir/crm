<template>
  <a-menu
    mode="vertical"
    theme="dark"
    class="the-menu"
  >
    <router-link
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      exact
    >
      <a-menu-item
        :key="link.to"
        :class="['rounded-s', setActiveClass(link.to)]"
      >
        {{ link.label }}
      </a-menu-item>
    </router-link>
  </a-menu>
</template>
<script setup>
const route = useRoute()

const links = shallowRef([
  {
    label: "Счет",
    to: "/",
  },
  {
    label: "История",
    to: "/history",
  },
  {
    label: "Планирование",
    to: "/planning",
  },
  {
    label: "Новая запись",
    to: "/new-entry",
  },
  {
    label: "Категории",
    to: "/categories",
  },
])

function setActiveClass(to) {
  return { "the-menu__item--active": route.path === to }
}
</script>

<style lang="scss">
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
  color: rgb(255 255 255 / 65%);

  background: none;
}

.ant-menu-item.rounded-s.the-menu__item--active.ant-menu-item-only-child {
  color: #ffffff;

  background: #1890ff;
}
</style>
