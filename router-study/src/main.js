import Vue from 'vue'
import App from './App.vue'
import router from './router'


new Vue({
  el: '#app',
  router,
  // 意味着当前挂载的组件会覆盖掉dom
  template: '<App />',
  components: {
    // 把APP变成vue实例下面的组件了
    App
  }
})