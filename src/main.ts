import { type Component, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./style.css";

const app = createApp(App as Component);

app.use(createPinia());
app.use(router);
app.mount("#app");
