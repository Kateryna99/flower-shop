
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./plugins/i18n";
import {createPinia} from "pinia";
import './assets/style/icomoon/icomoon_style.css';

const pinia = createPinia();

createApp(App).use(store).use(router).use(i18n).use(pinia).mount("#app");
