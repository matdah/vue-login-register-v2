import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => {
        ({
            token: null,
            user: null,
            message: null
        })
    },
    actions: {
        setToken(token) {
            this.token = token;
        },
        setUser(user) {
            this.user = user; 
        },
        async login(email, password) {
            const response = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const data = await response.json();
            this.message = data.message;
            if (data.token) {
                console.log("Token...");
                this.setToken(data.token);
                this.setUser(data.user);
            }
        },
        async logout() {
            this.setToken(null);
            this.setUser(null);
        },
        async register(name, email, password) {
            const response = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password, 
                }),
            });
            const data = await response.json();
            if (data.token) {
                this.setToken(data.token);
                this.setUser(data.user);
            }
        }
    },
    watch: {
        token: (token) => {
            if (token) {
                localStorage.setItem("token", token);
            } else {
                localStorage.removeItem("token");
            }
        },
        user: (user) => {
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                localStorage.removeItem("user");
            }
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    }
});