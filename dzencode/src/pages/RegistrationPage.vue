<script setup>
import { nextTick, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { key } from '../store/store'
import { useI18n } from 'vue-i18n'

const store = useStore(key)
const router = useRouter()
const { t } = useI18n()
const username = ref('')
const email = ref('')
const password = ref('')
const errors = ref({
  email: '',
  password: '',
  username: ''
})

const validateUsername = () => {
  if (!username.value) {
    errors.value.username = t('required')
  } else if (username.value.length < 3) {
    errors.value.username = t('fieldLong', { min: 3, max: 12 })
  } else if (username.value.length > 12) {
    errors.value.username = t('fieldLong', { min: 3, max: 12 })
  } else {
    errors.value.username = ''
  }
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    errors.value.email = t('required')
  } else if (!emailRegex.test(email.value)) {
    errors.value.email = t('correctEmail')
  } else {
    errors.value.email = ''
  }
}

const validatePassword = () => {
  if (!password.value) {
    errors.value.password = t('required')
  } else if (password.value.length < 6) {
    errors.value.password = t('fieldLong', { min: 6, max: 12 })
  } else if (password.value.length > 12) {
    errors.value.password = t('fieldLong', { min: 6, max: 12 })
  } else {
    errors.value.password = ''
  }
}

const register = () => {
  validateUsername()
  validateEmail()
  validatePassword()
  const user = { username: username.value, email: email.value, password: password.value }
  store
    .dispatch('register', user)
    .then(() => {
      nextTick(() => {
        setTimeout(() => {
          router.push('/orders') // Перенаправлення після успішного входу
        }, 2000) // Затримка на 1 секунду, щоб користувач побачив повідомлення
      })
    })
    .catch((err) => {
      console.error('Registration failed', err)
    })
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center mb-4">{{ $t('register') }}</h2>
        <form @submit.prevent="register">
          <div class="form-group mb-3">
            <label for="username">{{ $t('username') }}</label>
            <input
              type="text"
              v-model.trim="username"
              class="form-control"
              id="username"
              required
              :placeholder="$t('username')"
              @blur="validateUsername"
              :class="{ 'is-invalid': errors.username }"
            />
            <div v-if="errors.username" class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div class="form-group mb-3">
            <label for="email">{{ $t('email') }}</label>
            <input
              type="email"
              v-model.trim="email"
              class="form-control"
              id="email"
              required
              :placeholder="$t('email')"
              @blur="validateEmail"
              :class="{ 'is-invalid': errors.email }"
            />
            <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
          </div>
          <div class="form-group mb-3">
            <label for="password">{{ $t('password') }}</label>
            <input
              type="password"
              v-model.trim="password"
              class="form-control"
              id="password"
              required
              :placeholder="$t('password')"
              @blur="validatePassword"
              :class="{ 'is-invalid': errors.password }"
            />
            <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <button type="submit" class="btn btn-success w-100">
            {{ $t('register') }}
          </button>
        </form>
        <div class="text-center mt-3">
          <p>
            {{ $t('alreadyHaveAccount') }} <router-link to="/">{{ $t('login') }}</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
}

h2 {
  margin-bottom: 20px;
}
</style>
