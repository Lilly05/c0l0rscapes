import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BootstrapVueNext from 'bootstrap-vue-next';
import App from "@/App.vue";
import router from './router'

const app = createApp(App).use(router);

app.use(BootstrapVueNext);

app.mount('#app')
