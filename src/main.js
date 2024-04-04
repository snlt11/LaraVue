import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";

const app = createApp(App);

app.config.globalProperties.$baseUrl = "http://127.0.0.1:8000/api/";
app.config.globalProperties.$assetsUrl = "http://127.0.0.1:8000/uploads/";

app.use(router);

app.mount("#app");
