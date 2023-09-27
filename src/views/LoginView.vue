<template>
    <div class="">
        <h2>Inloggning</h2>
        <div v-show="outputMsg" v-html="outputMsg"></div>
        <form v-if="showForm" class="form-signin">            
            <div class="form-floating mb-4">
                <input type="email" class="form-control" v-model="email" placeholder="name@example.com" required>
                <label for="floatingInput">E-post</label>
            </div>
            <div class="form-floating mb-4">
                <input type="password" class="form-control" v-model="password" placeholder="Password" required>
                <label for="floatingPassword">Lösenord</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="loginUser">Logga in</button>
        </form>
    </div>
</template>

<script>
//import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
export default {
    name: 'LoginView',
    setup() {
        const authStore = useAuthStore();
        return {
            authStore,
            showForm: true
        };
    },
    data() {
        return {
            email: '',
            password: '',
            outputMsg: ''
        }
    },
    methods: {
        async loginUser() {
            console.log("Logging in...");
            await this.authStore.login(this.email, this.password);
            
            if(this.authStore.isLoggedIn) {
                //this.$router.push({ name: 'home' });
                this.outputMsg = "<p class='alert alert-primary'>Inloggad ok!</p>";
                this.outputMsg += "<p class='alert alert-primary'>Token: " + this.authStore.token + "</p>";
                
                // Hide form
                this.showForm = false;

                // Clear fields
                this.email = "";
                this.password = "";
            } else {
                this.outputMsg = "<p class='alert alert-danger'>Felaktig e-postadress eller lösenord.</p>";
            }
        }
    }
}
</script>

<style scoped>
.form-signin {
    max-width: 700px;
}
</style>