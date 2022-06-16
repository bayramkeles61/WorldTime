import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from "@iconify/vue";
import 'virtual:windi.css'
import "virtual:fonts.css";

createApp(App).component("Icon", Icon).mount('#app')
