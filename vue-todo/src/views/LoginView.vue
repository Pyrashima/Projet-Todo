<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../services/auth-service";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
    const user = await AuthService.login(email.value, password.value);

    if (user.success) {
        router.push({ name: "home" });
    }
};
</script>

<template>
    <div class="container-fluid">
        <form class="container">
            <div class="form-group">
                <label for="email">Adresse email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Entrez votre email"
                    v-model="email"
                />
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    v-model="password"
                />
            </div>

            <button @click="login" type="button" class="btn btn-primary mt-4 w-100">
                Login
            </button>
        </form>
    </div>
</template>