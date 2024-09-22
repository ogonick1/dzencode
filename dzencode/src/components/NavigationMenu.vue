<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav class="nav">
      <RouterLink to="/orders" class="nav-link">Orders</RouterLink>
      <RouterLink to="/products" class="nav-link">Products</RouterLink>
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
  flex-direction: column;
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
  border-bottom: 2px solid #01b201;
  color: #000;
}
.nav-link:hover {
  color: #01b201;
}
</style>
