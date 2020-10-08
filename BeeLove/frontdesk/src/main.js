import "./assets/css/index.css";
import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:9999";
Vue.prototype.$http = axios;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
