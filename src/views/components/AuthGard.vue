<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router";

import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const router = useRouter();

onMounted(async () => {
  if (!userStore.isConnected) {
    await router.replace("/");
  }
});

watch(
  () => userStore.isConnected,
  async (isConnected: boolean) => {
    if (!isConnected) await router.push("/");
  },
);
</script>

<template>
  <slot />
</template>
