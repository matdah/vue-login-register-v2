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

// Run authstore setup
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
authStore.initializeFromLocalStorage();
</script>

<style scoped>

</style>
