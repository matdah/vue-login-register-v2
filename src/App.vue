<template>
  <div class="container">
    <header>
      <h1>Login/register</h1>

      <nav>
        <RouterLink to="/"><span class="btn btn-primary">Hem</span></RouterLink>
        <RouterLink to="/register"><span class="btn btn-primary">Register</span></RouterLink>
        <RouterLink to="/login"><span class="btn btn-primary">Login</span></RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.btn {
  margin-right: 10px;
}
</style>
