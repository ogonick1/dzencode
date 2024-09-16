<script setup>
import { RouterView } from 'vue-router'
import NavigationMenu from './components/NavigationMenu.vue'
import TopMenu from './components/TopMenu.vue'
</script>

<template>
  <header>
    <TopMenu />
    <NavigationMenu />
  </header>
  <transition name="slide" mode="out-in">
    <RouterView />
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
