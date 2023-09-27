<template>
  <div class="container pt-5">
    <header>
      <h1 class="mb-4">Registrering/inlogging</h1>

      <NavBar />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

</script>

<style scoped>

</style>
