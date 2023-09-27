<template>
  <nav>
    <template v-if="!authStore.isLoggedIn">
      <RouterLink to="/"><span class="btn btn-primary">Hem</span></RouterLink>
      <RouterLink to="/register"
        ><span class="btn btn-primary">Registera</span></RouterLink
      >
      <RouterLink to="/login"
        ><span class="btn btn-primary">Inloggning</span></RouterLink
      >
      <div v-if="false">
        <p>IsLoggedIn: {{ authStore.isLoggedIn }}</p>
        <p>UserToken: {{ authStore.token }}</p>
        <p>User Name: {{ authStore.user.name }}</p>
      </div>
    </template>
    <template v-else>
      <RouterLink to="/"><span class="btn btn-primary">Hem</span></RouterLink>
      <RouterLink to="/profile"
        ><span class="btn btn-primary">Profil</span></RouterLink
      >
      <span class="btn btn-danger"><a @click="logout">Logga ut</a></span>
    </template>
  </nav>

  <p></p>
</template>
  
  <script>
import { useAuthStore } from "@/stores/auth";

export default {
  name: "NavBar",
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
    };
  },
  methods: {
    async logout() {
      console.log("Logging out...");
      this.authStore.logout();
    },
  },
};
</script>
  
  <style scoped>
.btn {
  margin-right: 10px;
}
</style>
  