<script setup lang="ts">
import { ref } from "vue";

import { useUpdateMail } from "../../../features/users/useUpdateMail";
import { useUpdatePassword } from "../../../features/users/useUpdatePassword";
import AppHeader from "../../components/AppHeader.vue";
import AuthGard from "../../components/AuthGard.vue";

const newEmail = ref("");
const oldPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const { updateMail } = useUpdateMail();
const { updatePassword } = useUpdatePassword();

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
          <h1 class="text-xl font-bold mb-4">Modifier mon adresse email</h1>
          <input
            v-model="newEmail"
            type="email"
            placeholder="Nouvelle adresse email"
            class="mb-2 w-full border p-2 rounded"
          />
          <button
            class="bg-blue-600 text-white px-3 py-1 rounded"
            @click="handleUpdateMail"
          >
            Confirmer
          </button>
        </section>
        <section>
          <h1 class="text-xl font-bold mb-4">Modifier mon mot de passe</h1>
          <input
            v-model="oldPassword"
            type="password"
            placeholder="Ancien mot de passe"
            class="mb-2 w-full border p-2 rounded"
          />
          <input
            v-model="newPassword"
            type="password"
            placeholder="Nouveau mot de passe"
            class="mb-2 w-full border p-2 rounded"
          />
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirmation du nouveau mot de passe"
            class="mb-2 w-full border p-2 rounded"
          />
          <button
            class="bg-blue-600 text-white px-3 py-1 rounded"
            @click="handleUpdatePassword"
          >
            Confirmer
          </button>
        </section>
      </main>
    </div>
  </AuthGard>
</template>
