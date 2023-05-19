<template>
  <app-card :header-margin="'0 0 20px 0'">
    <template #header>
      <app-form-title> Регистрация</app-form-title>
    </template>
    <template #body>
      <client-only>
        <a-form
          id="register-form"
          layout="vertical"
          @submit.prevent="submitHandler"
        >
          <schema-form :schema="schema" />
        </a-form>
      </client-only>
    </template>
    <template #footer>
      <app-checkbox @update:model-value="setAgree($event)">
        Пользовательское соглашение
      </app-checkbox>
      <div class="flex space-x-[15px]">
        <a-button
          block
          type="primary"
          form="register-form"
          html-type="submit"
        >
          Зарегистрироваться
        </a-button>
        <a-button block>
          <router-link to="/login">
            Войти
          </router-link>
        </a-button>
      </div>
    </template>
  </app-card>
</template>

<script setup>
import { SchemaForm, useSchemaForm } from "formvuelate"
import { useSchemaRegisterForm } from "~/tools/yup/useSchemaRegisterForm"

const { schema } = useSchemaRegisterForm()

const router = useRouter()

const formData = ref({
  email: null,
  password: null,
})
const isAgree = ref(null)

useSchemaForm(formData)

function submitHandler() {
  if (!isAgree.value) {
    return
  }

  $fetch("http://localhost:3000/register", {
    method: "POST",
    body: {
      email: formData.value.email,
      password: formData.value.password,
    },
  }).then((respone) => {
    console.log(respone)
    router.push("/login")
  })
}

function setAgree(e) {
  isAgree.value = e
}
</script>
