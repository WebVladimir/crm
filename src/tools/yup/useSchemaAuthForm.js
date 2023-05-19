import AppInput from "~/components/App/AppInput.vue"
import AppInputPassword from "~/components/App/AppInputPassword.vue"

export const useSchemaAuthForm = () => {
  markRaw(AppInput)
  markRaw(AppInputPassword)

  const schema = shallowRef({
    email: {
      component: AppInput,
      placeholder: "Введите email",
      name: "email",
      label: "Email",
    },
    password: {
      component: AppInputPassword,
      placeholder: "Введите пароль",
      name: "password",
      label: "Пароль",
    },
  })

  return { schema }
}
