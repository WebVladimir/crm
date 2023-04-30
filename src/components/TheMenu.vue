<template>
  <a-menu
    mode="vertical"
    theme="dark"
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
  return { "ant-menu-item-selected": route.path === to }
}
</script>
