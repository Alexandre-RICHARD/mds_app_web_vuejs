<script setup lang="ts">
import { computed, ref } from "vue";

const userFirstName = ref("");
const userLastName = ref("");
const userMailAddress = ref("");
const userRawPassword = ref("");
const userRawPasswordConfirmation = ref("");

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "switch"): void;
}>();

const dialog = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emit("update:modelValue", v),
});

const showPassword = ref(false);
</script>

<template>
  <div
    v-if="dialog"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded shadow w-96 p-4">
      <h3 class="text-lg font-bold mb-4">Inscription</h3>
      <input
        v-model="userFirstName"
        placeholder="Prénom"
        class="mb-2 w-full border p-2 rounded"
      />
      <input
        v-model="userLastName"
        placeholder="Nom"
        class="mb-2 w-full border p-2 rounded"
      />
      <input
        v-model="userMailAddress"
        type="email"
        placeholder="Email"
        class="mb-2 w-full border p-2 rounded"
      />
      <div class="relative mb-2">
        <input
          v-model="userRawPassword"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Mot de passe"
          class="w-full border p-2 pr-10 rounded"
        />
        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          @click="showPassword = !showPassword"
        >
          {{ showPassword ? '🙈' : '👁' }}
        </span>
      </div>
      <div class="relative mb-2">
        <input
          v-model="userRawPasswordConfirmation"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Confirmation du mot de passe"
          class="w-full border p-2 pr-10 rounded"
        />
        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          @click="showPassword = !showPassword"
        >
          {{ showPassword ? '🙈' : '👁' }}
        </span>
      </div>
      <div class="flex justify-end mt-4">
        <button class="bg-blue-600 text-white px-3 py-1 rounded">
          S'inscrire
        </button>
      </div>
      <div class="flex justify-end pt-2">
        <button
          class="text-sm text-blue-600 hover:underline"
          @click="emit('switch')"
        >
          J'ai déjà un compte
        </button>
      </div>
    </div>
  </div>
</template>
