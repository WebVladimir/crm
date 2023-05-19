<template>
  <app-card :header-margin="'0 0 20px 0'">
    <template #header>
      <app-form-title> Войти</app-form-title>
    </template>
    <template #body>
      <client-only>
        <a-form
          id="auth-form"
          layout="vertical"
          @submit.prevent="submitHandler"
        >
          <schema-form :schema="schema" />
        </a-form>
      </client-only>
    </template>
    <template #footer>
      <div class="flex space-x-[15px]">
        <a-button
          block
          type="primary"
          form="auth-form"
          html-type="submit"
        >
          Войти
        </a-button>
        <a-button block>
          <router-link to="/register">
            Регистрация
          </router-link>
        </a-button>
      </div>
    </template>
  </app-card>
</template>

<script setup>
import { SchemaForm, useSchemaForm } from "formvuelate"
import { useSchemaAuthForm } from "~/tools/yup/useSchemaAuthForm"

const { schema } = useSchemaAuthForm()

const router = useRouter()

const formData = ref({
  email: null,
  password: null,
})

useSchemaForm(formData)

function submitHandler() {
  $fetch("http://localhost:3000/signin", {
    method: "POST",
    body: {
      email: formData.value.email,
      password: formData.value.password,
    },
  }).then((respone) => {
    console.log(respone)
    router.push("/")
  })
}

function setAgree(e) {
  isAgree.value = e
}
</script>
