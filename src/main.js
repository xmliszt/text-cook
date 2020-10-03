import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale";
import en from "element-ui/lib/locale/lang/en";
import AsyncComputed from "vue-async-computed";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(AsyncComputed);
locale.use(en);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
