<template>
  <div class="container">
    <header>
      <h1>Login/register</h1>

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
