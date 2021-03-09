<template>
  <div>
    <TodoHeader></TodoHeader>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트 methods이름" -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoTab></TodoTab>
    <!-- v-bind:내려보낼 props 속성 이름 = "현재 위치 컴포넌트 데이터 속성" -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem" v-on:clearAll="clearAllItems"></TodoList>
  </div>
</template>

<script>
// ES6 문법으로 컴포넌트 구현
import TodoHeader from "./../components/todo/TodoHeader.vue";
import TodoInput from "./../components/todo/TodoInput.vue";
import TodoTab from "./../components/todo/TodoTab.vue";
import TodoList from "./../components/todo/TodoList.vue";

export default {
  naem: "todo",
  components: {
    // '컴포넌트 태그명' : 컴포넌트 내용
    TodoHeader: TodoHeader,
    TodoInput,
    TodoTab,
    TodoList,
  },
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem) {
        // 할일 완료 체크를 위한 completed와item 생성.
        // var obj = {completed:false, item:this.newTodoItem};
        var obj = {completed:false, item:todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
      console.log(todoItem, index)
    },
    toggleOneItem: function(todoItem, index) {
      // console.log(todoItem, index)
      // completed true처리
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
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

// ES5 문법으로 컴포넌트 구현
// var my_cmp = {
//   template: "<div>component</div>",
// };
// new Vue({
//   el: "",
//   components: {
//     // '컴포넌트이름' : '컴포넌트 내용'
//     "my-cmp": my_cmp,
//   },
// });
</script>

<style></style>