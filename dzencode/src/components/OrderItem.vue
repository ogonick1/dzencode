<script setup lang="ts">
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import { Order } from '@/types/types'

defineProps<{
  orders: Order[]
  selectedOrder: Order | null
}>()

const store = useStore(key)
const calculateTotalUAH = store.getters.calculateTotalUAH
const calculateTotalUSD = store.getters.calculateTotalUSD

const selectOrder = (orderId) => store.commit('selectOrder', orderId)
const confirmDelete = (order) => store.commit('confirmDelete', order)

function formatDate(dateString: string, format: 'short' | 'long'): string {
  const date = new Date(dateString)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear()).slice(-2)

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  if (format === 'long') {
    const monthName = monthNames[date.getMonth()]
    return `${day}/${monthName}/${year}`
  } else {
    return `${month}/${year}`
  }
}
</script>

<template>
  <li
    v-for="order in orders"
    :key="order.id"
    :class="['order', selectedOrder ? 'order--short' : '']"
    @click="selectOrder(order.id)"
  >
    <div v-if="!selectedOrder" class="order__title">{{ order.title }}</div>
    <div class="order__products">
      <div class="order__products-icon">
        <img src="../assets/icon/list-task.svg" alt="list-icon" />
      </div>
      <div class="order__products-length">
        <span>{{ order.products.length }}</span
        ><br />
        <span>{{ $t('product') }}</span>
      </div>
    </div>
    <div class="order__date">
      <span class="order__date-short">{{ formatDate(order.date, 'short') }}</span>
      <span class="order__date-long">{{ formatDate(order.date, 'long') }}</span>
    </div>
    <div v-if="!selectedOrder" class="order__total">
      <span class="order__total-usd">{{ calculateTotalUSD(order.products) }}</span>
      <span>{{ calculateTotalUAH(order.products) }}</span>
    </div>
    <button v-if="!selectedOrder" class="order__delete-btn" @click.stop="confirmDelete(order)">
      <img src="../assets/icon/delete.svg" alt="delete-icon" />
    </button>
    <div class="order__selected-button" v-if="selectedOrder === order">
      <img src="../assets//icon/chevron-compact-right.svg" alt="chevron-compact-right" />
    </div>
  </li>
</template>

<style scoped>
.order {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  color: #666;
}

.order--short {
  justify-content: start;
  gap: 20px;
  width: 220px;
}

.order:hover {
  box-shadow: 0 0 10px #0000001a;
}

.order__title {
  font-size: 1.1rem;
  margin-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
  text-decoration: underline;
}

.order__products {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
}

.order__products-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid rgba(102, 102, 102, 0.3);
  border-radius: 100%;
  width: 35px;
  height: 35px;
  transition: transform 0.3s ease;
}

.order__products-icon:hover {
  transform: scale(1.1);
}

.order__products-length span:nth-child(1) {
  font-weight: bold;
}

.order__products-length span:nth-child(3) {
  font-size: 0.8rem;
}

.order__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #666;
}

.order__date-short {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.6rem;
  color: rgba(102, 102, 102, 0.8);
}

.order__total {
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.order__total-usd {
  font-weight: 100;
  font-size: 0.6rem;
  color: rgba(102, 102, 102, 0.8);
}

.order__selected-button {
  position: absolute;
  width: 30px;
  height: 100%;
  background: #9e9e9e;
  right: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 6px;
  z-index: 1;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
}

.order__delete-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  margin-right: 5px;
}

.order__delete-btn:hover {
  transform: scale(1.1);
}
</style>
