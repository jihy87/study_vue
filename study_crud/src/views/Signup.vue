<template>
  <div class="login">
    <h1>Join</h1>
    <div class="wrap_form">
      <div class="bar_form"><label for="">ID</label><input type="text" /></div>
      <div class="bar_form">
        <label for="">PW</label><input type="password" />
      </div>
      <button class="btn wide">Join</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  /* padding: 1rem; */
}
.wrap_form {
  margin-top: 1rem;
}
.bar_form + .btn.wide {
  margin-top: 10px;
}
.bar_form {
}
.bar_form + .bar_form {
  margin-top: 2px;
}
.bar_form label {
  display: inline-block;
  width: 70px;
}
.bar_form input[type="text"],
.bar_form input[type="password"] {
  border: 1px solid #2c3e50;
  height: 30px;
  width: calc(100% - 72px);
  border-radius: 3px;
  vertical-align: middle;
  padding: 0.3rem;
  box-sizing: border-box;
}
</style>