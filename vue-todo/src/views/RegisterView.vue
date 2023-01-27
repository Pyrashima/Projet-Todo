<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../services/auth-service";

const authService = new AuthService();

const email = ref("");
const password = ref("");
const passwordRetype = ref("");

const router = useRouter();

const register = async () => {
    if (password.value !== passwordRetype.value) return;

    const user = await authService.register(email.value, password.value);

    if (user.sucess) {
        router.push({ name: "home" });
    }
};
</script>

<template>
    <div class="constainer-fluid">
        <form class="containner">
            <div class="form-goup">
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
                <label for="password">Entrez votre mot de passe</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    v-model="password"
                />
            </div>

            <div class="form-group">
                <label for="password-retype">Retype password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password-retype"
                    placeholder="Entrez de nouveau votre mot de passe"
                    v-model="password"
                />
            </div>
            <button
                @click="register"
                type="button"
                class="btn btn-primary mt-4 w-100"
            >
                Register
            </button>
        </form>
    </div>
</template>