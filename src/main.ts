import "./styles/index.scss";

import { type Component, createApp } from "vue";

import App from "./views/App.vue";

createApp(App as Component).mount("#app");
