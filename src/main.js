import Vue from "vue";
import VueChartkick from "vue-chartkick";
import { Chart } from "chart.js";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { dollarFilter } from "@/filters";
import { percentFilter } from "@/filters";
import router from "@/router";

Vue.config.productionTip = false;

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.use(VueChartkick.use(Chart));

new Vue({
  components: {
    PulseLoader: PulseLoader,
  },
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
