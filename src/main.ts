import "./styles/index.scss";

import { createApp, type Component } from "vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import pinia from "./stores";
import App from "./views/App.vue";

const vuetify = createVuetify();

createApp(App as Component).use(pinia).use(vuetify).mount("#app");
