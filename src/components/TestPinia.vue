<template>
  <div class="card">
    <div class="card-body">
      <h3>Pinia-test #1</h3>
      <p>Räknare är på: {{ store.count }}</p>
      <p>Dubblerat är det: {{ store.doubleCount }}</p>
      <button class="btn btn-success" @click="store.increment()">Inkrementera</button>&nbsp;
      <button class="btn btn-primary" @click="store.waitAndAdd">Vänta och addera</button>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/counter";

export default {
  name: "TestPinia",
  setup() {
    const store = useCounterStore();

    return {
      store,
    };
  },
};
</script>

<style scoped>
</style>