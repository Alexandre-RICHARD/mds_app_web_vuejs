<script setup lang="ts">
import { ref } from "vue";

import { useRegister } from "../../features/users/useRegister";
import { useLanguageStore } from "../../stores/language";
import ModalTemplate from "./ModalTemplate.vue";

const props = defineProps<{ visible: boolean }>();
const emit = defineEmits<{
  (e: "close"): void;
  (e: "switch"): void;
}>();

const showPassword = ref(false);
const firstName = ref("alex");
const lastName = ref("richard");
const email = ref("a@gmail.com");
const password = ref("abcdefg");
const confirmationPassword = ref("abcdefg");
const { register } = useRegister();
const languageStore = useLanguageStore();

async function handleRegister() {
  try {
    await register({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      confirmationPassword: confirmationPassword.value,
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
          <h3 class="text-lg font-bold mb-4">
            {{ languageStore.t("registerTitle") }}
          </h3>
          <input
            v-model="firstName"
            :placeholder="languageStore.t('firstNamePlaceholder')"
            class="mb-2 w-full border p-2 rounded"
          />
          <input
            v-model="lastName"
            :placeholder="languageStore.t('lastNamePlaceholder')"
            class="mb-2 w-full border p-2 rounded"
          />
          <input
            v-model="email"
            type="email"
            :placeholder="languageStore.t('emailPlaceholder')"
            class="mb-2 w-full border p-2 rounded"
          />
          <div class="relative mb-2">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              :placeholder="languageStore.t('passwordPlaceholder')"
              class="w-full border p-2 pr-10 rounded"
            />
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? "🙈" : "👁" }}
            </span>
          </div>
          <div class="relative mb-2">
            <input
              v-model="confirmationPassword"
              :type="showPassword ? 'text' : 'password'"
              :placeholder="languageStore.t('passwordConfirmationPlaceholder')"
              class="w-full border p-2 pr-10 rounded"
            />
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? "🙈" : "👁" }}
            </span>
          </div>
          <div class="flex justify-end mt-4">
            <button
              class="bg-blue-600 text-white px-3 py-1 rounded"
              @click="handleRegister"
            >
              {{ languageStore.t("registerAction") }}
            </button>
          </div>
          <div class="flex justify-end pt-2">
            <button
              class="text-sm text-blue-600 hover:underline"
              @click="emit('switch')"
            >
              {{ languageStore.t("haveAccount") }}
            </button>
          </div>
        </div>
      </div>
    </ModalTemplate>
  </transition>
</template>
