<script setup>
import { nextTick, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { key } from '../store/store'

const store = useStore(key);
const router = useRouter();

const username = ref('');
const email = ref('');
const password = ref('');

const register = () => {
  const user = { username: username.value, email: email.value, password: password.value };
  store
    .dispatch('register', user)
    .then(() => {
      nextTick(() => {
        setTimeout(() => {
          router.push('/orders'); // Перенаправлення після успішного входу
        }, 2000); // Затримка на 1 секунду, щоб користувач побачив повідомлення
      });
    })
    .catch((err) => {
      console.error('Registration failed', err);
    });
};
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
              v-model="username"
              class="form-control"
              id="username"
              required
              :placeholder="$t('username') "
            />
          </div>
          <div class="form-group mb-3">
            <label for="email">{{ $t('email') }}</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="email"
              required
              :placeholder="$t('email')"
            />
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
            />
          </div>
          <button type="submit" class="btn btn-success w-100">
            {{ $t('register') }}
          </button>
        </form>
        <div class="text-center mt-3">
          <p>
            {{ $t('alreadyHaveAccount') }} <router-link to="/login">{{ $t('login') }}</router-link>
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
