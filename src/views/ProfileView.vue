<template>
    <main>
      <h2>Min profil</h2>
  
      <pre>{{ authStore}}</pre>
      <p>Token: {{ token }}</p>
    </main>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/auth';
  export default {
    name: 'ProfileView',
    setup() {
        const authStore = useAuthStore();
        return {
            authStore
        };
    },
    data() {
        return {
            email: '',
            name: '',
            token: this.authStore.token
        }
    }, 
    components: {
      
    }
  }
  </script>
  
  <style scoped>
  
  </style>