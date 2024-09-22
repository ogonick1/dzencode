<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '../store/store'
import { computed } from 'vue'

const store = useStore(key)
const closeDetails = () => store.commit('closeDetails')
const deleteProductFromOrder = (orderId, productId) =>
  store.commit('deleteProductFromOrder', { orderId, productId })
const selectedOrder = computed(() => store.getters.selectedOrder)
const placeholderImage = '/src/assets/img/image.svg'
function setPlaceholder(event: Event) {
  const target = event.target as HTMLImageElement
  target.src = placeholderImage
}
</script>

<template>
  <div v-if="selectedOrder" class="order-details">
    <h3 class="order-details__title">{{ selectedOrder.title }}</h3>
    <div class="order-details__add-product">
      <img src="../assets/icon/plus-circle-fill.svg" alt="circle-add" />Добавить продукт
    </div>
    <ul class="order-details__products-list">
      <li
        v-for="product in selectedOrder.products"
        :key="product.id"
        class="order-details__product-item"
      >
        <div class="order-details__product-img-wrapper">
          <img
            class="order-details__product-img"
            :src="product.photo ? product.photo : '/src/assets/img/image.svg'"
            @error="setPlaceholder"
            alt="product-img"
          />
        </div>
        <div class="order-details__product-title">
          <span>{{ product.title }}</span
          ><br />
          <span class="order-details__product-serial">{{ product.serialNumber }}</span>
        </div>
        <div class="order-details__product-price">
          {{ product.price.find((p) => p.isDefault).value }}
          {{ product.price.find((p) => p.isDefault).symbol }}
        </div>
        <button
          class="order-details__delete-btn"
          @click.stop="deleteProductFromOrder(selectedOrder.id, product.id)"
        >
          <img src="../assets/icon/delete.svg" alt="delete-icon" />
        </button>
      </li>
    </ul>
    <div class="order-details__close-btn" @click="closeDetails()">
      <img src="../assets/icon/x-lg.svg" alt="x-circle" />
    </div>
  </div>
</template>

<style scoped>
.order-details {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 70%;
  border-radius: 6px;
  position: relative;
  border: 1px solid #ddd;
  margin-top: 16px;
}

.order-details__title {
  padding-left: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}

.order-details__product-title {
  font-size: 0.9rem;
}

.order-details__product-title span:nth-child(1) {
  text-decoration: underline grey;
}

.order-details__product-serial {
  font-size: 0.8rem;
  color: #666;
}

.order-details__product-img {
  max-height: 30px;
}

.order-details__product-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
}

.order-details__add-product {
  margin-left: 15px;
  display: flex;
  gap: 8px;
  color: #01b201;
  transition: all 0.3s ease;
  cursor: pointer;
}

.order-details__add-product:hover {
  text-decoration: underline;
}

.order-details__products-list {
  list-style: none;
  padding: 0;
}

.order-details__product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  padding: 10px;
  height: 30px;
}

.order-details__product-item:nth-last-child(1) {
  border-bottom: none;
}

.order-details__product-item:hover {
  box-shadow: 0 0 10px #0000001a;
}

.order-details__product-price {
  font-size: 0.8rem;
}

.order-details__close-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  box-shadow: 1px 2px 2px #666;
  z-index: 2;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: #fff;
  transition: scale 0.3s ease;
}

.order-details__close-btn:hover {
  scale: 1.1;
}

.order-details__delete-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  margin-right: 5px;
}

.order-details__delete-btn:hover {
  transform: scale(1.1);
}
</style>
