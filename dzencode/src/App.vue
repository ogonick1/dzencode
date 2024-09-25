<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavigationMenu from './components/NavigationMenu.vue'
import TopMenu from './components/TopMenu.vue'

</script>

<template>
  <TopMenu />
  <div class="layout">
    <aside class="navigation">
      <NavigationMenu />
    </aside>
    <main class="content">
      <transition name="slide" mode="out-in">
        <RouterView />
      </transition>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: calc(100vh - 60px);
  box-sizing: border-box;
}

.navigation {
  width: 150px;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
.content {
  flex: 1;
  padding: 20px;
  overflow: auto;
  background-color: #f8f6f6;
}

/* Анімація слайду */
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

header {
  background-color: #ffffff;
  padding: 10px 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  height: 60px;
  box-sizing: border-box;
}
</style>
