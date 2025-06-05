<script setup lang="ts">
import { ref } from "vue";

import { useAuth } from "../../features/users/useAuth";
import { deleteCookie } from "../../helpers/cookie/deleteCookie.helper";
import LoginModal from "./LoginModal.vue";
import RegisterModal from "./RegisterModal.vue";

const showLoginModal = ref(false);
const showRegisterModal = ref(false);
const { isLogged } = useAuth();

const logout = () => {
  deleteCookie("token");
};
</script>

<template>
  <header class="flex items-center px-4 py-2 bg-gray-200">
    <img
      src="@/assets/logo.png"
      alt="Logo"
      class="h-8 mr-4"
    />
    <div class="flex-1" />
    <template v-if="!isLogged">
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
    </template>
    <template v-else>
      <button
        class="bg-red-600 text-white px-2 py-1 rounded"
        @click="logout"
      >
        Déconnexion
      </button>
    </template>
  </header>

  <LoginModal
    :visible="showLoginModal"
    @switch="
      () => {
        showLoginModal = false;
        showRegisterModal = true;
      }
    "
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
    @close="
      () => {
        showRegisterModal = false;
      }
    "
  />
</template>
