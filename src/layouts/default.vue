<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/">
        Home
      </el-menu-item>
      <el-menu-item index="/products">
        Products
      </el-menu-item>
      <el-menu-item index="/about">
        About
      </el-menu-item>
      <el-menu-item index="/secret">
        Secret
      </el-menu-item>
    </el-menu>
    <div><slot /></div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const activeIndex = ref("/")

const handleSelect = (key) => {
  navigateTo(key)
}
</script>
