<script setup lang="ts">
import { useCartStore } from "../../stores/cart";
import { useLanguageStore } from "../../stores/language";

const cartStore = useCartStore();
const languageStore = useLanguageStore();
</script>

<template>
  <div class="mt-2 w-72 bg-white border rounded shadow p-2">
    <p
      v-if="cartStore.items.length === 0"
      class="p-2 text-sm text-center"
    >
      {{ languageStore.t("cartEmpty") }}
    </p>
    <div v-else>
      <div
        v-for="item in cartStore.items"
        :key="item.id"
        class="flex items-center justify-between mb-2"
      >
        <div>
          <p class="font-semibold">{{ item.name }}</p>
          <p class="text-sm">{{ item.price.toFixed(2) }} €</p>
        </div>
        <input
          type="number"
          class="w-16 border p-1 rounded mr-1"
          :value="item.quantity"
          min="1"
          @change="
            cartStore.updateQuantity(
              item.id,
              parseInt(($event.target as HTMLInputElement).value, 10),
            )
          "
        />
        <button
          class="text-red-600"
          @click="cartStore.removeItem(item.id)"
        >
          ×
        </button>
      </div>
      <p class="text-right font-semibold mt-2">
        {{ languageStore.t("cartTotal") }}:
        {{ cartStore.totalPrice.toFixed(2) }} €
      </p>
      <router-link
        to="/checkout/address"
        class="block mt-2 bg-blue-600 text-white text-center px-2 py-1 rounded"
      >
        {{ languageStore.t("checkoutAction") }}
      </router-link>
    </div>
  </div>
</template>
