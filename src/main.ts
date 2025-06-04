import "./styles/index.scss";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import { type Component, createApp } from "vue";
import { createVuetify } from "vuetify";

import { pinia } from "./storePinia";
import App from "./views/App.vue";

const vuetify = createVuetify();

createApp(App as Component)
  .use(pinia)
  .use(vuetify)
  .mount("#app");
