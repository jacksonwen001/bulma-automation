import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

import App from "./App.vue";
import router from "./router";
import * as Icons from '@element-plus/icons-vue'; 
import './plugins';
import '@/utils/interceptor';


const app = createApp(App);

// 注册Icons 全局组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key])
})

app.use(createPinia());
app.use(router);
app.use(ElementPlus)
app.mount("#app");
