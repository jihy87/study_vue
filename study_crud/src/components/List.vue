<template>
  <div class="list">
    List
    <ul>
      <li>
        가나다라마바사
        <div class="btns">
          <button class="btn">M</button>
          <button class="btn">D</button>
        </div>
      </li>
      <li>가나다라마바사</li>
      <li>가나다라마바사</li>
      <li>가나다라마바사</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.list {
}
.list li {
  display:flex;
  justify-content:space-between;
  padding:.5rem;
  background-color:#eee;
  margin-bottom:2px;
  border-radius:5px;
}
.btn {
  min-width:30px;
  height:30px;
  display:inline-block;
  border:1px solid #2c3e50;
  background-color:#fff;
  padding:.5rem;
  border-radius:8px;
  line-height:1.1;
  vertical-align: middle;
}
.btn+.btn {
  margin-left:5px;
}
</style>