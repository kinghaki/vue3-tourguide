import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Antd from 'ant-design-vue'

/** 初始化 */
import '@/assets/scss/_reset.scss'

/** 如果 Antd 在這裡全局註冊 样式文件不需要单独引入。
 *  如果 只有在組件裡註冊，樣式文件要分別引入
 */
import 'ant-design-vue/dist/antd.css'

/** 全局載入 tailwind.css */
import '@/assets/tailwind.css'
/** 載入自己的scss配置 */
import '@/assets/scss/_custom.scss'

const app = createApp(App)
/* 掛載全域性物件 start */
// app.config.globalProperties.$http = axios
/* 掛載全域性物件 end */

// app.provide('$axios', axios)

app.use(Antd).use(store).use(router).mount('#app')
