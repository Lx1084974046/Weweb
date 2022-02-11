import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Carousel from "v3-carousel"
Storage.prototype.setExpire = (key,value) => {
  localStorage.setItem(key,JSON.stringify(value));
}
Storage.prototype.getExpire = (key) => {
  if(localStorage.getItem(key)){
   return  JSON.parse(localStorage.getItem(key))
  }else{
    return null
  }
}
createApp(App).use(store).use(router).use(Antd).use(Carousel).mount('#app')
