<script setup lang="ts">
import { useRouter } from "vue-router";

import { useCartStore } from "../../../stores/cart";
import { useCheckoutStore } from "../../../stores/checkout";
import { useLanguageStore } from "../../../stores/language";
import AppHeader from "../../components/AppHeader.vue";

const router = useRouter();
const cartStore = useCartStore();
const checkoutStore = useCheckoutStore();
const languageStore = useLanguageStore();

function confirmOrder() {
  cartStore.clear();
  checkoutStore.reset();
  router.push("/");
}
</script>

<template>
  <div>
    <AppHeader />
    <main class="p-4 space-y-4">
      <h1 class="text-xl font-bold mb-4">
        {{ languageStore.t("checkoutSummaryTitle") }}
      </h1>
      <div>
        <h2 class="font-semibold">{{ languageStore.t("checkoutAddressTitle") }}</h2>
        <p>{{ checkoutStore.address }}</p>
      </div>
      <div>
        <h2 class="font-semibold">{{ languageStore.t("checkoutDeliveryTitle") }}</h2>
        <p>{{ checkoutStore.delivery }}</p>
      </div>
      <div>
        <h2 class="font-semibold">{{ languageStore.t("cart") }}</h2>
        <ul class="mb-2">
          <li
            v-for="item in cartStore.items"
            :key="item.id"
            class="flex justify-between"
          >
            <span>{{ item.name }} x{{ item.quantity }}</span>
            <span>{{ (item.price * item.quantity).toFixed(2) }} €</span>
          </li>
        </ul>
        <p class="text-right font-semibold">
          {{ languageStore.t("cartTotal") }}: {{ cartStore.totalPrice.toFixed(2) }} €
        </p>
      </div>
      <button
        class="bg-blue-600 text-white px-3 py-1 rounded"
        @click="confirmOrder"
      >
        {{ languageStore.t("confirm") }}
      </button>
    </main>
  </div>
</template>
