<script setup lang="ts">
import { ref } from "vue";

const userFirstName = ref("");
const userLastName = ref("");
const userMailAddress = ref("");
const userRawPassword = ref("");
const userRawPasswordConfirmation = ref("");

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "switch"): void;
}>();

const showPassword = ref(false);
</script>

<template>
  <v-dialog width="400">
    <v-card>
      <v-card-title class="text-lg font-bold">Inscription</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="userFirstName"
          label="Prénom"
          class="mb-2"
        />
        <v-text-field
          v-model="userLastName"
          label="Nom"
          class="mb-2"
        />
        <v-text-field
          v-model="userMailAddress"
          label="Email"
          type="email"
          class="mb-2"
        />
        <v-text-field
          v-model="userRawPassword"
          :type="showPassword ? 'text' : 'password'"
          label="Mot de passe"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          class="mb-2"
          @click:append-inner="showPassword = !showPassword"
        />
        <v-text-field
          v-model="userRawPasswordConfirmation"
          :type="showPassword ? 'text' : 'password'"
          label="Confirmation du mot de passe"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          class="mb-2"
          @click:append-inner="showPassword = !showPassword"
        />
      </v-card-text>
      <v-card-actions class="justify-between">
        <v-spacer />
        <v-btn color="primary">S'inscrire</v-btn>
      </v-card-actions>
      <v-card-actions class="justify-end pt-0">
        <v-btn
          variant="text"
          @click="emit('switch')"
        >
          J'ai déjà un compte
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
