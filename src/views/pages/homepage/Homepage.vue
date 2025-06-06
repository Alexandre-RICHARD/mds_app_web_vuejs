<script setup lang="ts">
import AppHeader from "../../components/AppHeader.vue";
import { useLanguageStore } from "../../stores/language";

const languageStore = useLanguageStore();
</script>

<template>
  <div>
    <AppHeader />
    <main class="p-4">
      <div class="text-center">{{ languageStore.t('nothingHere') }}</div>
    </main>
  </div>
</template>
