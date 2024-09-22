<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import DeleteModal from './DeleteModal.vue'
import OrderDetails from './OrderDetails.vue'
import OrderItem from './OrderItem.vue'

const store = useStore(key)
const orders = computed(() => store.getters.orders)
const selectedOrder = computed(() => store.getters.selectedOrder)
</script>

<template>
  <main class="main-content">
    <div class="wrapper">
      <img src="../assets/icon/plus-circle-fill.svg" alt="icon-circle" />
      <h2>Orders / {{ orders.length }}</h2>
    </div>

    <div class="orders-wrapper">
      <div :class="[selectedOrder ? 'orders-list-wrapper-short' : 'orders-list-wrapper']">
        <ul class="orders-list">
          <OrderItem :orders="orders" :selectedOrder="selectedOrder" />
        </ul>
      </div>
      <transition name="slide" mode="out-in">
        <OrderDetails />
      </transition>
    </div>
    <transition name="slide" mode="out-in">
      <DeleteModal />
  </transition>
  </main>
</template>
<style scoped>
.slide-enter-active {
  transition: transform 0.5s ease;
}
.slide-leave-active {
  transition: transform 0.2s ease-out;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
.wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}
.wrapper img {
  transition: transform 0.3s ease;
}
.wrapper h2 {
  margin: 0;
}
.wrapper img:hover {
  transform: scale(1.1);
}
.orders-list {
  border-radius: 6px;
  padding-left: 0;
  width: 100%;
}
.orders-list-wrapper {
  width: 100%;
}
.orders-list-wrapper-short {
  width: 25%;
}
.orders-wrapper {
  display: flex;
}
</style>
