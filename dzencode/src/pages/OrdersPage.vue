<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import DeleteModal from '../components/DeleteModal.vue'
import OrderDetails from '../components/OrderDetails.vue'
import OrderItem from '../components/OrderItem.vue'

const store = useStore(key)
const orders = computed(() => store.getters.orders)
const selectedOrder = computed(() => store.getters.selectedOrder)
</script>

<template>
  <main class="main-content">
    <div class="main-content__wrapper">
      <img src="../assets/icon/plus-circle-fill.svg" alt="icon-circle" />
      <h2>{{ $t('orders', { count: orders.length }) }}</h2>
    </div>

    <div class="main-content__orders">
      <div
        :class="[
          selectedOrder
            ? 'main-content__orders-list-wrapper--short'
            : 'main-content__orders-list-wrapper'
        ]"
      >
        <ul class="main-content__orders-list">
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

.main-content__wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.main-content__wrapper img {
  transition: transform 0.3s ease;
}

.main-content__wrapper img:hover {
  transform: scale(1.1);
}

.main-content__wrapper h2 {
  margin: 0;
}

.main-content__orders {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.main-content__orders-list {
  border-radius: 6px;
  padding-left: 0;
  width: 100%;
}

.main-content__orders-list-wrapper {
  width: 100%;
}

.main-content__orders-list-wrapper--short {
  width: 25%;
}

@media (max-width: 425px) {
  .main-content__orders {
    flex-direction: column;
    align-items: center;
    width: 90vw;
  }
}
</style>
