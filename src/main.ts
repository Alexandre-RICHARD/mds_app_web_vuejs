import "./styles/index.scss";

import { type Component, createApp } from "vue";

import { pinia } from "./storePinia";
import App from "./views/App.vue";

createApp(App as Component)
  .use(pinia)
  .mount("#app");
