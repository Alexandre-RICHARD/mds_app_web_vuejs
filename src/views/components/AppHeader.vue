<script setup lang="ts">
import { ref } from "vue";

import { useLanguageStore } from "../../stores/language";
import { useUserStore } from "../../stores/user";
import LangSwitcher from "./LangSwitcher.vue";
import LoginModal from "./LoginModal.vue";
import RegisterModal from "./RegisterModal.vue";

const showLoginModal = ref(false);
const showRegisterModal = ref(false);
const userStore = useUserStore();
const languageStore = useLanguageStore();
</script>

<template>
  <header class="flex items-center px-4 py-2 bg-gray-200">
    <img
      src="@/assets/logo.png"
      alt="Logo"
      class="h-8 mr-4"
    />
    <router-link
      to="/"
      class="text-l mx-2"
    >
      {{ languageStore.t("home") }}
    </router-link>
    <div class="flex-1" />
    <template v-if="!userStore.isConnected">
      <button
        class="mr-2 text-blue-600 hover:underline"
        @click="showLoginModal = true"
      >
        {{ languageStore.t("login") }}
      </button>
      <button
        class="bg-blue-600 text-white px-2 py-1 rounded"
        @click="showRegisterModal = true"
      >
        {{ languageStore.t("register") }}
      </button>
    </template>
    <template v-else>
      <router-link
        to="/profile"
        class="text-l font-bold pr-2"
      >
        {{ userStore.fullName }}
      </router-link>
      <button
        class="bg-red-600 text-white px-2 py-1 rounded"
        @click="userStore.disconnect"
      >
        {{ languageStore.t("logout") }}
      </button>
    </template>
    <LangSwitcher class="ml-2" />
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
