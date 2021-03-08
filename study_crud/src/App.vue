<template>
  <div id="app">
    <div class="wrap">
      <Header />
      <Container />
    </div>
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";
import Container from "./components/common/Container.vue";

export default {
  name: "App",
  components: {
    Header,
    Container,
  },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
