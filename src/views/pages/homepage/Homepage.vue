<script setup lang="ts">
import { computed, ref } from "vue";

import { useCartStore } from "../../../stores/cart";
import { useLanguageStore } from "../../../stores/language";
import AppHeader from "../../components/AppHeader.vue";
import type { ProductCategoryEnum } from "./productCategory.enum";
import { productsList } from "./productsList";

const languageStore = useLanguageStore();
const cartStore = useCartStore();

const search = ref("");
const selectedCategory = ref<ProductCategoryEnum | null>(null);

const categories = computed(() =>
  Array.from(new Set(productsList.value.map((p) => p.category))),
);

const filteredProducts = computed(() =>
  productsList.value.filter((p) => {
    const matchCategory =
      !selectedCategory.value || p.category === selectedCategory.value;
    const lowerSearch = search.value.toLowerCase();
    return (
      matchCategory &&
      (p.name.toLowerCase().includes(lowerSearch) ||
        p.description.toLowerCase().includes(lowerSearch))
    );
  }),
);
</script>

<template>
  <div>
    <AppHeader />

    <main class="p-4">
      <h1 class="text-xl font-bold mb-4">
        {{ languageStore.t("productPageTitle") }}
      </h1>
      <div class="flex items-center gap-2 mb-4">
        <input
          v-model="search"
          :placeholder="languageStore.t('searchPlaceholder')"
          class="border p-2 rounded flex-1"
        />
      </div>
      <div class="mb-4 space-x-2">
        <button
          class="px-3 py-1 rounded border"
          :class="!selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-200'"
          @click="selectedCategory = null"
        >
          {{ languageStore.t("allCategories") }}
        </button>
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-3 py-1 rounded border"
          :class="
            selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'
          "
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="border rounded p-4"
        >
          <img
            :src="`./src/assets/productImages/${product.image}`"
            alt=""
            class="w-full h-32 object-cover mb-2"
          />
          <h3 class="font-bold mb-1">{{ product.name }}</h3>
          <p class="text-sm mb-1">{{ product.description }}</p>
          <p class="font-semibold">{{ product.price.toFixed(2) }} €</p>
          <button
            class="mt-2 px-2 py-1 bg-blue-600 text-white rounded"
            @click="
              cartStore.addItem({
                id: product.id,
                name: product.name,
                price: product.price,
              })
            "
          >
            {{ languageStore.t("addToCart") }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
