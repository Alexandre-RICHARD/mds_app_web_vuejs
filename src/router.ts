import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./views/pages/homepage/Homepage.vue";
import ProductPage from "./views/pages/product/ProductPage.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/product", component: ProductPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
