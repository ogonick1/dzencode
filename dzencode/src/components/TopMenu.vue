<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { io } from 'socket.io-client'

const currentTime = ref('')

const activeSessions = ref(0)

const updateTime = () => {
  currentTime.value = new Date().toLocaleString()
}

const socket = io('http://localhost:3000')

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)

  socket.on('activeSessions', (count) => {
    activeSessions.value = count
  })
})

onUnmounted(() => {
  socket.disconnect()
})
</script>

<template>
  <header class="top-menu">
    <div class="top-menu__logotype">Logotype</div>
    <div class="top-menu__input">
      <input class="top-menu__input-item" type="text" :placeholder="$t('search')" />
    </div>
    <div>
      <select class="form-select" v-model="$i18n.locale">
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
    <div class="top-menu__info">
      <span>{{ currentTime }}</span>
      <span class="session-counter">{{ $t('sessions') }}: {{ activeSessions }}</span>
    </div>
  </header>
</template>

<style scoped>
.top-menu {
  display: flex;
  justify-content: space-between;
  margin: 15px;
  background-color: #fff;
  align-items: center;
  margin: 0 auto;
}

.top-menu__logotype {
  font-size: 20px;
}
@media (max-width: 425px) {
  .top-menu__logotype {
    display: none;
  }
}

.top-menu__input {
  display: flex;
  align-items: center;
}

.top-menu__input-item {
  background-color: #ebe9e9;
  border: none;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 12px;
  height: 24px;
  width: 250px;
}
.top-menu__input-item:focus {
  outline: none;
}
.top-menu__info {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #666;
}
@media (max-width: 768px) {
  .top-menu__input {
    display: none;
  }
  .top-menu__logotype {
    font-size: 1rem;
  }
  .top-menu__info span {
    width: 15vw;
  }
}

@media (max-width: 425px) {
  .top-menu__info {
    font-size: 10px;
  }
}

.session-counter {
  font-weight: bold;
}
</style>
