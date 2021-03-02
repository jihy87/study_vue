<template>
  <div>
    <div class="write">
      <h1>List</h1>
      <div class="bar_form">
        <label for="">PW</label><input type="password" />
      </div>
      <br />
      <!-- <div class="form_txt">
        <input name="" id="" style="width: 100%" />
        <button class="btn wide">write</button>
      </div> -->
    </div>
    <div class="tab">
      <ul>
        <li>todo</li>
        <li>finish</li>
      </ul>
    </div>
    <br />
    <div class="list">
      <button class="btn">finish로 이동</button>
      <ul>
        <li>
          <input type="checkbox" />
          가나다라마바사
          <div class="btns">
            <button class="btn">M</button>
            <button class="btn">D</button>
          </div>
        </li>
        <li>
          <input type="checkbox" />
          가나다라마바사
          <div class="btns">
            <button class="btn">M</button>
            <button class="btn">D</button>
          </div>
        </li>
        <li>
          <input type="checkbox" />
          가나다라마바사
          <div class="btns">
            <button class="btn">M</button>
            <button class="btn">D</button>
          </div>
        </li>
        <li>
          <input type="checkbox" />
          가나다라마바사
          <div class="btns">
            <button class="btn">M</button>
            <button class="btn">D</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.list {
}
.list li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #eee;
  margin-bottom: 2px;
  border-radius: 5px;
}
.btn {
  min-width: 30px;
  height: 30px;
  display: inline-block;
  border: 1px solid #2c3e50;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 8px;
  line-height: 1.1;
  vertical-align: middle;
}
.btn + .btn {
  margin-left: 5px;
}

.write {
  /* margin-top:1rem; */
}
.form_txt textarea {
  width: 100%;
  height: 80px;
}
.btn.wide {
  width: 100%;
}

.tab ul {
  display: flex;
  justify-content: space-between;
}
.tab ul li {
  border: 1px solid #ccc;
  width: 50%;
  text-align: center;
}
</style>