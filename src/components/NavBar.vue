<template>
    <nav>
        <RouterLink to="/"><span class="btn btn-primary">Hem</span></RouterLink>
        <span v-if="isLoggedIn">
            <span class="btn btn-danger"><a @click="logout">Logout</a></span>
        </span>
        <span v-else>
            <RouterLink to="/register"><span class="btn btn-primary">Register</span></RouterLink>
            <RouterLink to="/login"><span class="btn btn-primary">Login</span></RouterLink>
        </span>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isLoggedIn: false
        }
    },
    computed: {
        //isLoggedIn: true
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