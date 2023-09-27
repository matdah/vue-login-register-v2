<template>
  <main class="container mt-5">    
      <h2>Startsidan</h2>      

    <TestPinia />
  </main>
</template>

<script>
import TestPinia from "@/components/TestPinia.vue";

export default {
  name: "HomeView",
  components: {
    TestPinia,
  },
};
</script>

<style scoped>
</style>
