<template>
  <div>
    <el-button @click="$router.push('/')">
      Home
    </el-button>
    <div>
      <slot />
    </div>
  </div>
</template>
