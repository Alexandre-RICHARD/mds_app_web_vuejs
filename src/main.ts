import "./styles/index.scss";

import { type Component, createApp } from "vue";

import { router } from "./router";
import { pinia } from "./storePinia";
import App from "./views/App.vue";

createApp(App as Component)
  .use(pinia)
  .use(router)
  .mount("#app");
