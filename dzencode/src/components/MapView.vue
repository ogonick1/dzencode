<template>
  <div id="map" class="leaflet-container"></div>
</template>

<script>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'MapView',
  setup() {
    const kharkivCoords = [50.015583, 36.228425] // пр. Науки, 56, Харків

    onMounted(() => {
      const map = L.map('map').setView(kharkivCoords, 15)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      L.marker(kharkivCoords).addTo(map).bindPopup('dZENcode').openPopup()
    })
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 350px;
}
</style>
