<template>
  <div
    :class="[
      'app-burger w-[35px] h-[30px] inline-block relative cursor-pointer',
      toggleOpenClass,
    ]"
    @click="storeSideBar.toogleOpen"
  >
    <span />
    <span />
    <span />
  </div>
</template>

<script setup>
import { useStoreSideBar } from "~/stores/useStoreSideBar"

const storeSideBar = useStoreSideBar()

const toggleOpenClass = computed(() => {
  return { open: !storeSideBar.isOpen }
})
</script>

<style lang="scss">
.app-burger span {
  position: absolute;

  background-color: #ffffff;
  border-radius: 2px;

  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}

.app-burger span:nth-child(1) {
  top: 0;
  left: 0;

  display: block;
  width: 100%;
  height: 4px;
}

.app-burger span:nth-child(2) {
  top: 13px;
  left: 0;

  display: block;
  width: 100%;
  height: 4px;
}

.app-burger span:nth-child(3) {
  bottom: 0;
  left: 0;

  display: block;
  width: 100%;
  height: 4px;
}

.app-burger.open span:nth-child(1) {
  top: 12px;
  left: 3px;

  width: 30px;

  transform: rotate(90deg);

  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  transition-delay: 150ms;
}

.app-burger.open span:nth-child(2) {
  top: 20px;
  left: 2px;

  width: 20px;

  transform: rotate(45deg);

  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  transition-delay: 50ms;
}

.app-burger.open span:nth-child(3) {
  top: 20px;
  left: 14px;

  width: 20px;

  transform: rotate(-45deg);

  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  transition-delay: 100ms;
}

.app-burger:not(.open):hover span:nth-child(1) {
  top: -2px;
  left: 0;

  display: block;
  width: 100%;
  height: 4px;

  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}

.app-burger:not(.open):hover span:nth-child(2) {
  top: 13px;
  left: 0;

  display: block;
  width: 100%;
  height: 4px;

  transition: 0.4s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}

.app-burger:not(.open):hover span:nth-child(3) {
  bottom: -2px;
  left: 0;

  display: block;
  width: 100%;
  height: 4px;

  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}

.app-burger.open {
  transform: rotate(90deg);
}
</style>
