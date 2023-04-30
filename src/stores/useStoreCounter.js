export const useStoreCounter = defineStore("counter", () => {
  const { $api } = useNuxtApp()
  const count = ref(0)
  const name = ref("Counter")

  /**
   * Returns the count value * 2
   *
   * @returns {number}
   */
  const doubleCount = computed(() => count.value * 2)

  /**
   * Up Counter
   */
  async function increment() {
    const result = await $api.todos.getById({ id: 1 })
    console.log(result)
    count.value += 1
  }

  return { count, name, doubleCount, increment }
})
