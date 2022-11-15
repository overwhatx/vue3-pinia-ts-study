import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 导入pinia
import { createPinia } from 'pinia'
// 创建pinia 实例
const pinia=createPinia()
const app = createApp(App)
// 挂载 pinia 
app.use(pinia)

app.mount('#app')
