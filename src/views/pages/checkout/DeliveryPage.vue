<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useCheckoutStore } from "../../../stores/checkout";
import { useLanguageStore } from "../../../stores/language";
import AppHeader from "../../components/AppHeader.vue";

const router = useRouter();
const checkoutStore = useCheckoutStore();
const languageStore = useLanguageStore();

const delivery = ref(checkoutStore.delivery);

function nextStep() {
  checkoutStore.setDelivery(delivery.value);
  router.push("/checkout/summary");
}
</script>

<template>
  <div>
    <AppHeader />
    <main class="p-4">
      <h1 class="text-xl font-bold mb-4">
        {{ languageStore.t("checkoutDeliveryTitle") }}
      </h1>
      <input
        v-model="delivery"
        :placeholder="languageStore.t('deliveryPlaceholder')"
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
