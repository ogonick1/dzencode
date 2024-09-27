<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import { useRouter } from 'vue-router'

const store = useStore(key)
const router = useRouter()

const isLoggedIn = computed(() => store.getters.isLoggedIn)
const user = computed(() => store.getters.user)

const logout = () => {
  store.dispatch('logout').then(() => {
    router.push('/')
  })
}
</script>

<template>
  <div class="wrapper">
    <nav class="nav">
      <div v-if="isLoggedIn">
        <li class="nav-item mx-auto">
          <div class="mx-auto">
            <img class="rounded mx-auto d-block" src="../assets/img/person.svg" alt="user-img" />
          </div>
          <span class="mx-auto text-uppercase fs-5">
            {{ user?.username || 'User' }}
          </span>
        </li>
        <li v-if="isLoggedIn" class="nav-item mx-auto">
          <button class="btn btn-outline-danger" @click="logout">
            {{ $t('logout') }}
          </button>
        </li>
      </div>
      <RouterLink v-else to="/" class="nav-link">{{ $t('login') }}</RouterLink>
      <RouterLink to="/orders" class="nav-link">{{ $t('order') }}</RouterLink>
      <RouterLink to="/products" class="nav-link">{{ $t('product') }}</RouterLink>
      <RouterLink v-if="isLoggedIn" to="/protect" class="nav-link">{{ $t('protect') }}</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  transition: all 0.3s ease;
}

.router-link-active {
  border-bottom: 2px solid #019601;
  color: #000;
}

.nav-link:hover {
  color: #01b201;
}

.nav-item {
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .nav {
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }
  .nav-link {
    font-size: 0.8rem;
  }
}
</style>
