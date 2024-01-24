import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import store from "./store";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";
import './assets/style/icomoon/icomoon_style.css';

// Ініціалізація Pinia перед створенням екземпляра Vue
const pinia = createPinia();

createApp(App).use(pinia).use(router).use(i18n).mount("#app");

