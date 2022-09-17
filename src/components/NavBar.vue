<template>
    <nav>
        <RouterLink to="/"><span class="btn btn-primary">Hem</span></RouterLink>
        <span v-if="isLoggedIn">            
            <RouterLink to="/profile"><span class="btn btn-primary">Profil</span></RouterLink>
            <span class="btn btn-danger"><a @click="logout">Logout</a></span>
        </span>
        <span v-else>
            <RouterLink to="/register"><span class="btn btn-primary">Register</span></RouterLink>
            <RouterLink to="/login"><span class="btn btn-primary">Login</span></RouterLink>            
        </span>
    </nav>

    <p>IsLoggedIn: {{ isLoggedIn}}</p>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
export default {
    name: 'NavBar',
    setup() {
        const authStore = useAuthStore();
        //console.log(authStore.isAuthenticated);
        return {
            authStore
        };
    },
    data() {
        return {
            isLoggedIn: this.authStore.isAuthenticated
        }
    },
    methods: {
        async logout() {
            console.log("Logging out...");
        }
    },
}
</script>

<style scoped>
.btn {
  margin-right: 10px;
}
</style>