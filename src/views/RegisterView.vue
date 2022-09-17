<template>
    <div class="center-form">
        <h2>Registera konto</h2>
        <form class="form-signin">
            <div v-show="outputMsg" v-html="outputMsg"></div>
            <div class="form-floating">
                <input type="name" class="form-control" v-model="name" placeholder="Förnamn Efternamn" required>
                <label for="floatingInput">Namn</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" v-model="email" placeholder="name@example.com" required>
                <label for="floatingInput">E-post</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model="password" placeholder="Password" required>
                <label for="floatingPassword">Lösenord</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="register">Registrera</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'RegisterView',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            outputMsg: ''
        }
    },
    methods: {
        async register() {
            if (this.name === "" || this.email === "" || this.password === "") {
                this.outputMsg = "<p class='alert alert-danger'>Samtliga fält är obligatoriska!</p>";
                return;
            }
            try {
                let result = await axios.post("http://127.0.0.1:8000/api/register", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                console.log(result);
                this.outputMsg = "<p class='alert alert-danger'>Kontot är registrerat.</p>";

            } catch (error) {
                console.log(error);
                this.outputMsg = "<p class='alert alert-primary'>Fel vid registrering - e-postadressen är troligen registrerad.</p>";
            }
        }
    }
}
</script>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 15px;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>