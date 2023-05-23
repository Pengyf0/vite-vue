import { createApp } from 'vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import echarts from '@/DBsever/echarts'
console.log('main.js', 'LAST_UPDATE_TIME', window.LOCAL_IP)


const app = createApp(App)
app.use(router).provide('echarts', echarts).use(store).use(ElementPlus).mount('#app')
