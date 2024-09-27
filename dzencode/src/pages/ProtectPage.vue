<script setup>
import MapView from '@/components/MapView.vue'
import OrderChart from '@/components/OrderChart.vue'
</script>

<template>
  <div class="container mt-2">
    <div class="card">
      <h5 class="card-title mx-auto m-4">{{ $t('chart') }}</h5>
      <div class="card-body">
        <OrderChart />
      </div>
    </div>

    <div class="card">
      <h5 class="card-title mx-auto m-4">{{ $t('map') }}</h5>
      <div class="card-body">
        <MapView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.card-body {
  padding: 20px;
}
</style>
