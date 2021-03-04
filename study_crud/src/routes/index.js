import Vue from 'vue';
import VueRouter from 'vue-router';
// 코드 스플리팅으로 쓰지 않는 import. routes>component에 import 선언으로 교체.
// import Login from "./../views/Login.vue";
// import Signup from "./../views/Signup.vue";
// import List from "./../views/List.vue";
// import Write from "./../views/Write.vue";

Vue.use(VueRouter);
export default new VueRouter({
  // 해쉬뱅 모드 제거를 위한 mode 재 설정 
  // #가 붙어있는 이유: 해당 html만 서버에서 체크하기 때문.
  // 주의할 점 : 배포 시 서버 url 설정 필요.
  mode:'history',
  routes:[
    {
      // 리다이렉트 설정 (기본페이지)
      path:'/',
      redirect:'/list',
    },
    {
      path:'/login',
      // 코드 스플리팅. 처음부터 페이지를 다 불러오지 않고, uri가 바뀔 때마다 호출하기. 초기 애플리케이션 속도를 높임.
      //component: Login
      component: () => import('./../views/Login.vue')
    },
    {
      path:'/signup',
      component: () => import('./../views/Signup.vue')
    },
    {
      path:'/list',
      component: () => import('./../views/List.vue')
    },
    {
      path:'/write',
      component: () => import('./../views/Write.vue')
    },
    {
      // 정의되지 않는 경로 설정
      path:'*',
      component: ()=> import('./../views/NotFound.vue')
    }
  ]
});