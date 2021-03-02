<template>
  <div class="header">
    <router-link to="/login">로그인</router-link> |
    <router-link to="/signup">회원가입</router-link> |
    <router-link to="/list">목록</router-link> |
    <router-link to="/write">쓰기</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
</style>