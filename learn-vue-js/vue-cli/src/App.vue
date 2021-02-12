<template>
  <div>
    <!-- <app-header v-bind:props속성 이름="상위 컴포넌트의 데이터 이름">{{ str }}</app-header> -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import appHeader from "./components/AppHeader.vue";

export default {
  data: function () {
    return {
      str: "Header!",
    };
  },
  components: {
    "app-header": appHeader,
  },
  methods: {
    renewStr: function () {
      this.str = "hi";
    },
  },
};
</script>

<style>
</style>