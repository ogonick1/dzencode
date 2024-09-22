<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
//import { io } from 'socket.io-client'

const currentTime = ref('')

const activeSessions = ref(0)

const updateTime = () => {
  currentTime.value = new Date().toLocaleString()
}

//const socket = io('http://localhost:3000')

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)

  //socket.on('activeSessions', (count) => {
  //  activeSessions.value = count
  //})
})

//onUnmounted(() => {
//  socket.disconnect()
//})
</script>

<template>
  <div class="top-menu">
    <div class="top-menu__info">
      <span>{{ currentTime }}</span>
      <span class="session-counter">Active sessions: {{ activeSessions }}</span>
    </div>
  </div>
</template>

<style scoped>
.top-menu {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.top-menu__info {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #333;
}

.session-counter {
  font-weight: bold;
}
</style>
