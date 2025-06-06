<script setup lang="ts">
import { ref } from "vue";

import { useUpdateMail } from "../../../features/users/useUpdateMail";
import { useUpdatePassword } from "../../../features/users/useUpdatePassword";
import { useLanguageStore } from "../../../stores/language";
import AppHeader from "../../components/AppHeader.vue";
import AuthGard from "../../components/AuthGard.vue";

const newEmail = ref("");
const oldPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const { updateMail } = useUpdateMail();
const { updatePassword } = useUpdatePassword();
const languageStore = useLanguageStore();

async function handleUpdateMail() {
  try {
    await updateMail({ email: newEmail.value });
    newEmail.value = "";
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdatePassword() {
  try {
    await updatePassword({
      oldPassword: oldPassword.value,
      newPassword: newPassword.value,
      confirmationPassword: confirmPassword.value,
    });
    oldPassword.value = "";
    newPassword.value = "";
    confirmPassword.value = "";
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <AuthGard>
    <div>
      <AppHeader />
      <main class="p-4 space-y-8">
        <section>
          <h1 class="text-xl font-bold mb-4">
            {{ languageStore.t("modifyEmail") }}
          </h1>
          <input
            v-model="newEmail"
            type="email"
            :placeholder="languageStore.t('newEmailPlaceholder')"
            class="mb-2 w-full border p-2 rounded"
          />
          <button
            class="bg-blue-600 text-white px-3 py-1 rounded"
            @click="handleUpdateMail"
          >
            {{ languageStore.t("confirm") }}
          </button>
        </section>
        <section>
          <h1 class="text-xl font-bold mb-4">
            {{ languageStore.t("modifyPassword") }}
          </h1>
          <input
            v-model="oldPassword"
            type="password"
            :placeholder="languageStore.t('oldPasswordPlaceholder')"
            class="mb-2 w-full border p-2 rounded"
          />
          <input
            v-model="newPassword"
            type="password"
            :placeholder="languageStore.t('newPasswordPlaceholder')"
            class="mb-2 w-full border p-2 rounded"
          />
          <input
            v-model="confirmPassword"
            type="password"
            :placeholder="languageStore.t('newPasswordConfirmationPlaceholder')"
            class="mb-2 w-full border p-2 rounded"
          />
          <button
            class="bg-blue-600 text-white px-3 py-1 rounded"
            @click="handleUpdatePassword"
          >
            {{ languageStore.t("confirm") }}
          </button>
        </section>
      </main>
    </div>
  </AuthGard>
</template>
