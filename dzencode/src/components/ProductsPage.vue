<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '../store/store'
import { computed, ref } from 'vue'

const store = useStore(key)
const products = computed(() => store.getters.products)
const getOrderTitleById = (orderId: number) => {
  return store.getters.getOrderTitleById(orderId)
}
const selectedType = ref('')

const productTypes = computed(() => {
  const types = products.value.map((product) => product.type)
  //@ts-ignore
  return [...new Set(types)]
})
const filteredProducts = computed(() => {
  if (!selectedType.value) {
    return products.value
  }
  return products.value.filter((product) => product.type === selectedType.value)
})
function formatDate(date: string | number | Date, format: 'long' | 'short') {
  const options: Intl.DateTimeFormatOptions =
    format === 'long'
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: '2-digit', month: '2-digit' }

  return new Date(date).toLocaleDateString('en-US', options)
}
</script>

<template>
  <div class="products container">
    <div class="products__header row align-items-center mb-3">
      <h2 class="col-md-4 mb-0">{{ $t('products', { count: filteredProducts.length }) }}</h2>
      <div class="products__filter col-md-8 d-flex align-items-center">
        <div class="products__filter-title me-2">{{ $t('type') }}:</div>
        <select class="form-select w-auto" v-model="selectedType">
          <option value="">{{ $t('types') }}</option>
          <option v-for="type in productTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>
    </div>
    <transition-group name="fade" tag="ul" class="list-unstyled">
      <li
        class="products__item row align-items-center p-3 mb-3 bg-white border rounded"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <div class="col-md-3">
          <strong>{{ product.title }}</strong>
        </div>
        <div class="col-md-2 text-muted">{{ product.type }}</div>
        <div class="col-md-3">
          <div class="products__item-guarantee">
            <div class="products__item-guarantee-start text-muted">
              {{ $t('start') }}
              <span> {{ formatDate(product.guarantee.start, 'long') }}</span>
              <span> {{ formatDate(product.guarantee.start, 'short') }}</span>
            </div>
            <div class="products__item-guarantee-end text-muted">
              {{ $t('end') }}
              <span> {{ formatDate(product.guarantee.end, 'long') }} </span>
              <span>{{ formatDate(product.guarantee.end, 'short') }}</span>
            </div>
          </div>
        </div>
        <div class="products__item-price col-md-2">
          <span>{{ product.price[0]?.value }} $</span>
          <span>{{ product.price[1]?.value }} {{ $t('uah') }}</span>
        </div>
        <div class="col-md-2 text-muted">{{ getOrderTitleById(product.order) }}</div>
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.products__filter-title {
  font-size: 1rem;
  color: #666;
}

.products__item-guarantee {
  display: flex;
  flex-direction: column;
}

.products__item-guarantee-start {
  font-size: 0.8rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.products__item-guarantee-end {
  display: flex;
  justify-content: space-around;
  font-size: 0.8rem;
  color: #666;
}
.products__item-guarantee-start span:nth-last-child(1),
.products__item-guarantee-end span:nth-last-child(1) {
  font-weight: bold;
}
.products__item-price {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
}
.products__item-price span:nth-child(1) {
  font-weight: 100;
  font-size: 0.7rem;
  color: #666;
}

@media (max-width: 768px) {
  .products__header {
    flex-direction: column;
    gap: 10px;
  }
  .products__item {
    flex-direction: column;
    text-align: left;
  }
}
</style>
