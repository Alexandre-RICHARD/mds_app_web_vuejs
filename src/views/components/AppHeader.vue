<script setup lang="ts">
import { ref } from "vue";

import LoginModal from "./LoginModal.vue";
import RegisterModal from "./RegisterModal.vue";

const showLogin = ref(false);
const showRegister = ref(false);
</script>

<template>
  <header class="flex items-center px-4 bg-gray-200">
    <img
      src="@/assets/logo.png"
      alt="Logo"
      class="h-8 mr-4"
    />
    <div class="flex-1" />
    <button
      class="mr-2 text-blue-600 hover:underline"
      @click="showLogin = true"
    >
      Connexion
    </button>
    <button
      class="bg-blue-600 text-white px-2 py-1 rounded"
      @click="showRegister = true"
    >
      Inscription
    </button>
  </header>

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
