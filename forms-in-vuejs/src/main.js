import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false;
// import "uikit/dist/css/uikit.min.css";

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
