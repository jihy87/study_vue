<template>
  <div class="list">
    <div class="list_head">
      <button class="btn">Finish로 이동</button>
      <button class="btn">clear all</button>
    </div>
    <ul>
      <li v-for="todoItem in propsdata" v-bind:key="todoItem.item">
        <div class="item">
          <i class="far fa-square"></i>
          <i class="far fa-check-square"></i>
          <span>{{ todoItem.item }}</span>
        </div>
        <div class="btns">
          <button class="btn"><i class="fas fa-pen"></i></button>
          <button class="btn" v-on:click="deleteItem"><i class="fas fa-trash"></i></button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  // data: function(){
  //   return {
  //     todoItems:[]
  //   }
  // },
  // 페이지 생성 되자마자 스토리지 데이터 뿌려주기
  created: function() {
    if(localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // console.log(localStorage.getItem(localStorage.key(i)));
          this.propsdata.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  methods:{
    deleteItem: function(){
      console.log('d')
    }
  }
};
</script>

<style>
</style>