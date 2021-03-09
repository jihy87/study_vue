<template>
  <div class="list">
    <div class="list_head">
      <button class="btn">Finish로 이동</button>
      <button class="btn" v-on:click="clearTodo">clear all</button>
    </div>
    <ul>
      <!-- <li v-for="todoItem in todoItems" v-bind:key="todoItem"> -->
      <!-- v-for에는 내장 index가 있다. -->
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
        <div class="item">
          <input type="checkbox" v-on:click="toggleComplete(todoItem, index)" />
          <!-- <span>{{ todoItem }}</span> -->
          <!-- todoItem completed 속성이 true일 때 class 삽입. -->
          <span v-bind:class="{done: todoItem.completed}">{{ todoItem.item }}</span>
        </div>
        <div class="btns">
          <button class="btn"><i class="fas fa-pen"></i></button>
          <button class="btn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash"></i></button>
        </div>
      </li>
      <!-- <li>
        <div class="item">
          <input type="checkbox" />
          <span>가나다라마바사</span>
        </div>
        <div class="btns">
          <button class="btn"><i class="fas fa-pen"></i></button>
          <button class="btn"><i class="fas fa-trash"></i></button>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
      console.log(todoItem, index)
    },
    toggleComplete: function(todoItem, index) {
      // console.log(todoItem, index)
      // completed true처리
      todoItem.completed = !todoItem.completed;
      // 로컬스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearTodo: function() {
      localStorage.clear();
    }
  },
  // created => vue라이프사이클 중 하나. 인스턴스가 생성 되지마자 호출되는 라이프사이클 훅. (훅: 생성되는 시점에 정해준 로직 수행.)
  created: function() {
    // console.log('created');
    if(localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // this.todoItems.push(localStorage.key(i));
          // console.log(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          
        }
      }
    }
  }
};
</script>

<style>
</style>