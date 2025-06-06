<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useCheckoutStore } from "../../../stores/checkout";
import { useLanguageStore } from "../../../stores/language";
import AppHeader from "../../components/AppHeader.vue";

const router = useRouter();
const checkoutStore = useCheckoutStore();
const languageStore = useLanguageStore();

const address = ref(checkoutStore.address);

function nextStep() {
  checkoutStore.setAddress(address.value);
  router.push("/checkout/delivery");
}
</script>

<template>
  <div>
    <AppHeader />
    <main class="p-4">
      <h1 class="text-xl font-bold mb-4">
        {{ languageStore.t("checkoutAddressTitle") }}
      </h1>
      <input
        v-model="address"
        :placeholder="languageStore.t('addressPlaceholder')"
        class="mb-4 w-full border p-2 rounded"
      />
      <button
        class="bg-blue-600 text-white px-3 py-1 rounded"
        @click="nextStep"
      >
        {{ languageStore.t("confirm") }}
      </button>
    </main>
  </div>
</template>
