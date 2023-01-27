<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import AuthService from "./services/auth-service";
import LogoutButton from "./components/LogoutButton.vue";

const router = userRouter();
const authService = new AuthService();

const tryAuth = async () => {
  const user = await authService.authenticate();
  if (!user) {
    router.push({ name: "login" });
  } else {
    router.push({ name: "home" });
  }
};
onMounted(tryAuth);
</script>

<template>
  <LogoutButton />
  <RouterView />
  <RouterLink />
</template>

<style scoped></style>
