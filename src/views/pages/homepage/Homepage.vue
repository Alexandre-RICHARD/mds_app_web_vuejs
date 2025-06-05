<script setup lang="ts">
import AppHeader from "../../components/AppHeader.vue";
</script>

<template>
  <div>
    <AppHeader />
    <main class="p-4">
      <div class="text-center">
        <router-link
          to="/product"
          class="text-blue-600 underline mt-4 block"
        >
          Voir un produit
        </router-link>
      </div>
    </main>
  </div>
</template>
