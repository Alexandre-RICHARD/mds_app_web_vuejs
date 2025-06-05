<script setup lang="ts">
import { ref } from "vue";

import { useLogin } from "../../features/users/useLogin";
import ModalTemplate from "./ModalTemplate.vue";

const props = defineProps<{ visible: boolean }>();
const emit = defineEmits<{
  (e: "close"): void;
  (e: "switch"): void;
}>();

const showPassword = ref(false);
const email = ref("alexandrichard99@gmail.com");
const password = ref("au4uqbf11");
const { login } = useLogin();

async function handleLogin() {
  try {
    await login({
      email: email.value,
      password: password.value,
    });
    emit("close");
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <transition name="fade">
    <ModalTemplate
      v-if="props.visible"
      max-width="500px"
      max-height="400px"
      @close="emit('close')"
    >
      <div
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white rounded shadow w-96 p-4">
          <h3 class="text-lg font-bold mb-4">Connexion</h3>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="mb-2 w-full border p-2 rounded"
          />
          <div class="relative mb-2">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Mot de passe"
              class="w-full border p-2 pr-10 rounded"
            />
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? "🙈" : "👁" }}
            </span>
          </div>
          <div class="text-right mb-4">
            <button class="text-sm text-blue-600 hover:underline">
              Mot de passe oublié ?
            </button>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-blue-600 text-white px-3 py-1 rounded"
              @click="handleLogin"
            >
              Se connecter
            </button>
          </div>
          <div class="flex justify-end pt-2">
            <button
              class="text-sm text-blue-600 hover:underline"
              @click="emit('switch')"
            >
              Je n'ai pas encore de compte
            </button>
          </div>
        </div>
      </div>
    </ModalTemplate>
  </transition>
</template>
