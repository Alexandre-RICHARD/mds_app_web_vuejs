<script setup lang="ts">
import { useCounterStore } from "../../../stores/counter";
import AppHeader from "../../components/AppHeader.vue";

const counter = useCounterStore();
</script>

<template>
  <div>
    <AppHeader />
    <main class="p-4">
      <div class="text-center">
        <button
          class="bg-blue-600 text-white px-3 py-1 rounded"
          @click="counter.increment"
        >
          Increment
        </button>
        <p class="mt-2 text-xl font-bold">Count: {{ counter.count }}</p>
      </div>
    </main>
  </div>
</template>
