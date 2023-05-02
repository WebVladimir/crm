<template>
  <div class="login-page">
    <app-card>
      <div class="login-page__step">
        <div class="login-page__body">
          <p class="login-page__title text-2xl font-medium">
            Домашняя бухгалтерия
          </p>

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

            <a-form-item>
              <a-button
                type="primary"
                block
                html-type="submit"
                size="large"
              >
                Войти
              </a-button>
            </a-form-item>
          </a-form>
        </div>
        <div class="login-page__footer">
          <div class="login-page__footer-text">
            Нет аккаунта ?
            <router-link
              to="/register"
              class="login-page__link"
            >
              Зарегистрироваться
            </router-link>
          </div>
        </div>
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
})

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
  }
})

const v$ = useVuelidate(validations, formData)

function submitHandler() {
  if (v$.value.$invalid) {
    v$.value.$touch()
    return
  }

  router.push("/")
}
</script>

<style lang="scss">
.login-page__form {
  margin-bottom: 25px;
}

.login-page__footer {
  padding: 10px 0;

  border-top: 1px solid #1890ff;
}

.login-page__footer-text {
  font-size: 16px;
}
</style>
