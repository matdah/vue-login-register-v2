import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            isLoggedIn: null,
            token: null,
            user: null,
            message: null
        }
    },
    actions: {
        setToken(token) {
            this.token = token;
        },
        setUser(user) {
            this.user = user;
        },
        setIsLoggedIn(loggedIn) {
            this.isLoggedIn = loggedIn;
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
                console.log("Token..." + data.token);
                //console.table(data.user);
                this.setToken(data.token);
                this.setUser(data.user);
                this.isLoggedIn = true;

                // Store token and user in local storage
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
            }
        },
        async logout() {
            this.setToken(null);
            this.setUser(null);
            this.setIsLoggedIn(null);

            // Clear storage
            localStorage.removeItem("token");
            localStorage.removeItem("user");
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
            console.log(data);
        }
    }
});