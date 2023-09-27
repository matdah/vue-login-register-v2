<template>
  <main class="container mt-5 mb-5">
    <h2 class="mt-4">Min profil</h2>
    <div v-if="authStore.isLoggedIn">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Användarinfo</h5>
          <p class="card-text">
            <strong>User Name:</strong> {{ authStore.user.name }}
          </p>
          <p class="card-text">
            <strong>Email:</strong> {{ authStore.user.email }}
          </p>
        </div>
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">Token-information</h5>
        <p class="card-text">
          <strong>IsLoggedIn:</strong> {{ authStore.isLoggedIn }}
        </p>
        <p class="card-text">
          <strong>User Token:</strong> {{ authStore.token }}
        </p>
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">Användardata</h5>
        <pre>{{ authStore.user }}</pre>
      </div>
    </div>
  </main>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

export default {
  name: "ProfileView",

  beforeRouteEnter(to, from, next) {
    const authStore = useAuthStore();
    const router = useRouter();

    if (!authStore.isLoggedIn) {
      next("/login"); // Redirect to the login page if not authenticated
    } else {
      next();
    }
  },

  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
      token: authStore.token,
    };
  },
};
</script>
