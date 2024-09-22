<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '../store/store'

const store = useStore(key)
</script>

<template>
  <main>
    <h2>{{ store.state }}</h2>
  </main>
</template>
