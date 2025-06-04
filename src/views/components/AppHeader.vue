<script setup lang="ts">
import { ref } from "vue";

import LoginModal from "./LoginModal.vue";
import RegisterModal from "./RegisterModal.vue";

const showLogin = ref(false);
const showRegister = ref(false);
</script>

<template>
  <v-app-bar
    flat
    class="px-4 bg-gray-200"
  >
    <img
      src="@/assets/logo.png"
      alt="Logo"
      class="h-8 mr-4"
    />
    <v-spacer />
    <v-btn
      variant="text"
      class="mr-2"
      @click="showLogin = true"
    >
      Connexion
    </v-btn>
    <v-btn
      color="primary"
      @click="showRegister = true"
    >
      Inscription
    </v-btn>
  </v-app-bar>

  <LoginModal
    v-model="showLogin"
    @switch="
      () => {
        showLogin = false;
        showRegister = true;
      }
    "
  />
  <RegisterModal
    v-model="showRegister"
    @switch="
      () => {
        showRegister = false;
        showLogin = true;
      }
    "
  />
</template>
