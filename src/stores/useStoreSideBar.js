export const useStoreSideBar = defineStore("sidebar", () => {
  const isOpen = ref(true)

  function toogleOpen() {
    isOpen.value = !isOpen.value
  }

  return { toogleOpen, isOpen }
})
