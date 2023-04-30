import todos from "./todos"

export default function (appFetch) {
  return {
    todos: todos(appFetch),
  }
}
