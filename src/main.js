import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import DashboardPlugin from "./dashboard-plugin";

const options = { containerClassName: "ct-notification" };

const appInstance = createApp(App);
appInstance.config.performance = true;
appInstance.use(router);
appInstance.use(store);
appInstance.use(Toast, options);
appInstance.use(DashboardPlugin);
appInstance.mount("#app");
