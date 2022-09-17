<template>
    <h3>Pinia-test #1</h3>

    <p>Count is: {{ store.count }}</p>
    <p>Double is: {{ store.doubleCount }}</p>
    <button @click="store.increment()">Increment</button>
    <button @click="store.waitAndAdd">Wait and add</button>
</template>

<script>
import { useCounterStore } from '../stores/counter';

export default {
    name: 'TestPinia',
    setup() {
        const store = useCounterStore();

        return {
            store
        };
    }
};

</script>

<style scoped>

</style>