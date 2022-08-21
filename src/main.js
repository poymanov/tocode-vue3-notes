import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { notes } from "@/stores/notes";

import "./assets/scss/main.scss";

const app = createApp(App);

app.use(notes);
app.use(router);

app.mount("#app");
