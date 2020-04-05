import Vue from "vue"
import store from "./store.js"
import router from "./router.js"
import App from "./App.vue"

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
