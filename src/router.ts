import { createRouter, createWebHistory } from "vue-router";

import { useUserStore } from "./stores/user";
import CheckoutAddress from "./views/pages/checkout/AddressPage.vue";
import CheckoutDelivery from "./views/pages/checkout/DeliveryPage.vue";
import CheckoutSummary from "./views/pages/checkout/SummaryPage.vue";
import Homepage from "./views/pages/homepage/Homepage.vue";
import ProductPage from "./views/pages/product/ProductPage.vue";
import ProfilePage from "./views/pages/profile/ProfilePage.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/product", component: ProductPage },
  { path: "/profile", component: ProfilePage, meta: { requiresAuth: true } },
  { path: "/checkout/address", component: CheckoutAddress },
  { path: "/checkout/delivery", component: CheckoutDelivery },
  { path: "/checkout/summary", component: CheckoutSummary },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isConnected) {
    next({ path: "/" });
  } else {
    next();
  }
});
