import { createApp } from "vue";
import route from "./routes/routes";
import store from "./store/store";
import App from "./App.vue";
const app = createApp(App);
app.use(route);
app.use(store);
app.mount("#app");
