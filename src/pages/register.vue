<template>
  <div class="register-page">
    <app-card>
      <div class="register-page__step">
        <div class="register-page__body">
          <p class="register-page__title text-2xl font-medium">
            Регистрация
          </p>
        </div>

        <a-form
          :model="formData"
          autocomplete="off"
          layout="vertical"
          class="login-page__form"
          @submit.prevent="submitHandler"
        >
          <a-form-item
            label="Имя пользователя"
            name="name"
            :validate-status="v$.name.$errors.length ? 'error' : ''"
            class="register-page__input-item"
          >
            <a-input
              v-model:value.trim="formData.name"
              class="h-[40px]"
            />
            <div
              v-for="error in v$.name.$errors"
              v-show="v$.name.$errors"
              :key="error"
              class="text-red-700"
            >
              {{ error.$message }}
            </div>
          </a-form-item>

          <a-form-item
            label="Пароль"
            name="password"
            :validate-status="v$.name.$errors.length ? 'error' : ''"
            class="register-page__input-item"
          >
            <a-input-password
              v-model:value.trim="formData.password"
              placeholder="Введите пароль"
              class="h-[40px]"
            />
            <div
              v-for="error in v$.password.$errors"
              v-show="v$.password.$errors"
              :key="error"
              class="text-red-700"
            >
              {{ error.$message }}
            </div>
          </a-form-item>
          <a-form-item name="remember">
            <a-checkbox v-model:checked="formData.isAgree">
              Принимаю правила оферты
            </a-checkbox>
            <div
              v-for="error in v$.isAgree.$errors"
              v-show="v$.isAgree.$errors"
              :key="error"
              class="text-red-700"
            >
              {{ error.$message }}
            </div>
          </a-form-item>
          <a-form-item class="register-page__button-item">
            <a-button
              type="primary"
              block
              html-type="submit"
              size="large"
            >
              Зарегистрироваться
            </a-button>
          </a-form-item>

          <a-form-item class="register-page__button-item">
            <router-link to="/login">
              <a-button
                type="primary"
                block
                size="large"
              >
                Войти
              </a-button>
            </router-link>
          </a-form-item>
        </a-form>
      </div>
    </app-card>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core"
import { helpers, minLength, required } from "@vuelidate/validators"

const router = useRouter()

definePageMeta({
  layout: "empty",
})

const formData = ref({
  name: null,
  password: null,
  isAgree: false,
})

const isTrue = (value) => {
  return value
}

const validations = computed(() => {
  return {
    name: {
      required: helpers.withMessage("Введите имя пользователя", required),
      minLength: helpers.withMessage(
        ({ $params, $model }) =>
          `Введите не менее ${$params.min} символов. Cейчас ${$model.length}`,
        minLength(6)
      ),
    },
    password: {
      required: helpers.withMessage("Введите пароль", required),
      minLength: helpers.withMessage(
        ({ $params, $model }) =>
          `Введите не менее ${$params.min} символов. Cейчас ${$model.length}`,
        minLength(6)
      ),
    },
    isAgree: {
      isTrue: helpers.withMessage("Обязательное поле", isTrue),
    },
  }
})

const v$ = useVuelidate(validations, formData)

function submitHandler() {
  if (v$.value.$invalid) {
    v$.value.$touch()
    return
  }

  router.push("/login")
}
</script>

<style lang="scss">
.ant-form.login-page__form {
  margin: 0;
}

.register-page__button-item {
  margin-bottom: 10px;
}

.register-page__input-item {
  margin-bottom: 10px;
}

.register-page__button-item:last-child {
  margin: 0;
}
</style>
