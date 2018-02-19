//window.Vue = require('vue');

import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueRouter); //Cargar rutas
Vue.use(BootstrapVue); //Usar Bootstrap

//Definir rutas:
const routes = [
    // {path: '/plot', name:'plotear', component: Plot},
    {path: '/home', component: Home},
    { path: "*", component: Home }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});