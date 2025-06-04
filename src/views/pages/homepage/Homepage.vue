<script setup lang="ts">
import AppHeader from "../../components/AppHeader.vue";
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main class="p-4">
      <div class="text-center">
        <v-btn color="primary" @click="counter.increment">Increment</v-btn>
        <p class="mt-2 text-xl font-bold">Count: {{ counter.count }}</p>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped></style>
