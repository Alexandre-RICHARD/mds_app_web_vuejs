<script setup lang="ts">
import AppHeader from "../../components/AppHeader.vue";
import AuthGard from "../../components/AuthGard.vue";
</script>

<template>
  <AuthGard>
    <div>
      <AppHeader />
      <main class="p-4">
        <h1 class="text-xl font-bold">Product page</h1>
        <p>Voici un super produit.</p>
      </main>
    </div>
  </AuthGard>
</template>
