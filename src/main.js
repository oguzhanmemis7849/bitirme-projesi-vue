import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { appAxios } from "./utils/appAxios";

Vue.config.productionTip = false;

Vue.prototype.$http = appAxios;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
