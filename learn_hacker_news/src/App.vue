<template>
  <div id="app">
    <!-- ctrl 누르고 태그에 마우스를 올리면 해당 컴포넌트 미리보기를 할 수 있다.
    이 때 태그 앞글자기 대문자일 때는 확인이 불가능하다.
    vue스타일 가이드에서는 이부분 고려해 케밥스타일'ddd-ddd'로 스타일 작성하기를 권고 함. -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/Header.vue';
// eslint 검사 off. eslint-disable ↓↓
/* eslint-disable */
export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
