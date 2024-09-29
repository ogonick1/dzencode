<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store/store'
import { useI18n } from 'vue-i18n'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const store = useStore(key)
const { t } = useI18n()

const chartData = computed(() => {
  const labels = store.getters.orders.map((order) => order.title)
  const data = store.getters.orders.map((order) => {
    return order.products.reduce((total, product) => {
      const uahPrice = product.price.find((p) => p.symbol === 'UAH')
      return total + (uahPrice ? uahPrice.value : 0)
    }, 0)
  })

  return {
    labels,
    datasets: [
      {
        label: t('totalOrderValue'),
        backgroundColor: '#2E8B57',
        borderColor: '#388e3c',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(76, 175, 80, 0.8)',
        data
      }
    ]
  }
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <Bar :data="chartData" :options="options" />
</template>
