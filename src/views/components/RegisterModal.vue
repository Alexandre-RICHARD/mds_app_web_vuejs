<script setup lang="ts">
import { computed, ref } from "vue";

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
  <v-dialog v-model="dialog" width="400">
    <v-card>
      <v-card-title class="text-lg font-bold">Inscription</v-card-title>
      <v-card-text>
        <v-text-field label="Email" type="email" class="mb-2" />
        <v-text-field label="Nom" class="mb-2" />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Mot de passe"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
          class="mb-2"
        />
      </v-card-text>
      <v-card-actions class="justify-between">
        <v-spacer />
        <v-btn color="primary">S'inscrire</v-btn>
      </v-card-actions>
      <v-card-actions class="justify-end pt-0">
        <v-btn variant="text" @click="emit('switch')">
          J'ai déjà un compte
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
