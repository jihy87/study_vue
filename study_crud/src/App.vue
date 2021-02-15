<template>
  <div id="app">
    <div class="wrap">
      <Login />
      <Header />
      <Container />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Container from "./components/Container.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Header,
    Container,
    Login,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
* {
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
body {
  font-family: "Do Hyeon", sans-serif;
  color: #2c3e50;
  font-size: 20px;
  line-height: 1.4;
  background-color: #000;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.wrap {
  width: 600px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
