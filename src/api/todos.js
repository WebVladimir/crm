export default function (appFetch) {
  return {
    /**
     * @param {object} payload
     * @param {number} payload.id
     */
    getById(payload) {
      const id = payload.id

      return appFetch(`/todos/${id}`, {
        method: "GET",
      })
    },

    /**
     * @param {object} payload
     * @param {number} payload.userId
     * @param {string} payload.title
     * @param {boolean} payload.completed
     */
    add(payload) {
      const data = {
        userId: payload.userId,
        title: payload.title,
        completed: payload.completed,
      }

      return appFetch("/todos", {
        method: "POST",
        body: data,
      })
    },
  }
}
