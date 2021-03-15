import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsVeiw from '../views/NewsView.vue';
import JobsVeiw from '../views/JobsView.vue';
import AskVeiw from '../views/AskView.vue';

Vue.use(VueRouter);

// const router 를 export 해서 main.js에서 불러오도록 유도.
export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:"/",
      component: NewsVeiw
    },
    {
      //path: url 주소.
      path:"/news",
      // component: url주소로 갔을 때 노출 될 컴포넌트
      component: NewsVeiw
    },
    {
      path:"/jobs",
      component: JobsVeiw
    },
    {
      path:"/ask",
      component: AskVeiw
    }
  ]
})