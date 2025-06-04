<script setup lang="ts">
import { ref } from "vue";

import LoginModal from "./LoginModal.vue";
import RegisterModal from "./RegisterModal.vue";

const showLoginModal = ref(false);
const showRegisterModal = ref(false);
</script>

<template>
  <header class="flex items-center px-4 py-2 bg-gray-200">
    <img
      src="@/assets/logo.png"
      alt="Logo"
      class="h-8 mr-4"
    />
    <div class="flex-1" />
    <button
      class="mr-2 text-blue-600 hover:underline"
      @click="showLoginModal = true"
    >
      Connexion
    </button>
    <button
      class="bg-blue-600 text-white px-2 py-1 rounded"
      @click="showRegisterModal = true"
    >
      Inscription
    </button>
  </header>

  <LoginModal
    :visible="showLoginModal"
    @switch="
      () => {
        showLoginModal = false;
        showRegisterModal = true;
      }
    "
    @submit="() => {}"
    @close="
      () => {
        showLoginModal = false;
      }
    "
  />
  <RegisterModal
    :visible="showRegisterModal"
    @switch="
      () => {
        showRegisterModal = false;
        showLoginModal = true;
      }
    "
    @submit="() => {}"
    @close="
      () => {
        showRegisterModal = false;
      }
    "
  />
</template>
