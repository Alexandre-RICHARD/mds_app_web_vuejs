<script setup lang="ts">
import { computed, ref } from "vue";

import { useLanguageStore } from "../../../stores/language";
import { useCartStore } from "../../../stores/cart";
import AppHeader from "../../components/AppHeader.vue";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

const languageStore = useLanguageStore();
const cartStore = useCartStore();

const products = ref<Product[]>([
  {
    id: 1,
    name: "Laptop",
    description: "Powerful laptop",
    price: 1499,
    category: "Electronics",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest generation phone",
    price: 799,
    category: "Electronics",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Office chair",
    description: "Comfortable chair for work",
    price: 199,
    category: "Furniture",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Desk lamp",
    description: "Light up your desk",
    price: 49,
    category: "Decoration",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    name: "Vue.js book",
    description: "Learn Vue.js quickly",
    price: 29,
    category: "Books",
    image: "https://via.placeholder.com/300x200",
  },
]);

const search = ref("");
const selectedCategory = ref<string | null>(null);

const categories = computed(() =>
  Array.from(new Set(products.value.map((p) => p.category))),
);

const filteredProducts = computed(() =>
  products.value.filter((p) => {
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
            :src="product.image"
            alt=""
            class="w-full h-32 object-cover mb-2"
          />
          <h3 class="font-bold mb-1">{{ product.name }}</h3>
          <p class="text-sm mb-1">{{ product.description }}</p>
          <p class="font-semibold">{{ product.price.toFixed(2) }} €</p>
          <button
            class="mt-2 px-2 py-1 bg-blue-600 text-white rounded"
            @click="cartStore.addItem({ id: product.id, name: product.name, price: product.price })"
          >
            {{ languageStore.t('addToCart') }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
