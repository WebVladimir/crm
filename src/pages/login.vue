<template>
  <div class="login-page">
    <app-card>
      <div class="login-page__step">
        <div class="login-page__body">
          <p class="login-page__title text-2xl font-medium">
            Домашняя ухгалтерия
          </p>

          <a-form
            :model="formState"
            autocomplete="off"
            layout="vertical"
            class="login-page__form"
          >
            <a-form-item
              label="Имя пользователя"
              name="username"
              :rules="[
                {
                  required: true,
                  message: 'Пожалуйста, введите имя пользователя',
                },
              ]"
            >
              <a-input
                v-model:value="formState.username"
                class="h-[40px]"
              />
            </a-form-item>

            <a-form-item
              label="Пароль"
              name="password"
              :rules="[
                { required: true, message: 'Пожалуйста, введите пароль' },
              ]"
            >
              <a-input-password
                v-model:value="formState.password"
                placeholder="Введите пароль"
                class="h-[40px]"
              />
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
              to=""
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
definePageMeta({
  layout: "empty",
})

const formState = ref({
  login: null,
  password: null,
})
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
