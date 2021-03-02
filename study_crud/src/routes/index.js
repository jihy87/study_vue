import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "./../views/Login.vue";
import Signup from "./../views/Signup.vue";
import List from "./../views/List.vue";
import Write from "./../views/Write.vue";

Vue.use(VueRouter);
export default new VueRouter({
  routes:[
    {
      path:'/login',
      component: Login
    },
    {
      path:'/signup',
      component: Signup
    },
    {
      path:'/list',
      component: List
    },
    {
      path:'/write',
      component: Write
    }
  ]
});