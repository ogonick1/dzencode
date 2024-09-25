<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '../store/store'

const store = useStore(key)

const email = ref('test@email.com')
const password = ref('123456')
const errors = ref({
  email: '',
  password: ''
})

const router = useRouter()

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    errors.value.email = 'Email is required'
  } else if (!emailRegex.test(email.value)) {
    errors.value.email = 'Please enter a valid email address'
  } else {
    errors.value.email = ''
  }
}

const validatePassword = () => {
  if (!password.value) {
    errors.value.password = 'Password is required'
  } else if (password.value.length < 6) {
    errors.value.password = 'Password must be at least 6 characters long'
  } else {
    errors.value.password = ''
  }
}

const login = () => {
  validateEmail()
  validatePassword()

  if (!errors.value.email && !errors.value.password) {
    const user = { email: email.value, password: password.value }
    store
      .dispatch('login', user)
      .then(() => {
        nextTick(() => {
          setTimeout(() => {
            router.push('/orders')
          }, 2000)
        })
      })

      .catch((err) => {
        console.error('Login failed', err)
      })
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center mb-4">{{ $t('login') }}</h2>
        <form @submit.prevent="login">
          <div class="form-group mb-3">
            <label for="email">{{ $t('email') }}</label>
            <input
              type="email"
              v-model="email"
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
              v-model="password"
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
            {{ $t('login') }}
          </button>
        </form>
        <div class="text-center mt-3">
          <p>
            {{ $t('noAccount') }} <router-link to="/register">{{ $t('register') }}</router-link>
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

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
  font-size: 0.9rem;
}
</style>
