<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addTodoItemData"></TodoInput>
    <TodoTab></TodoTab>
    <!-- list로 데이터 내리기. -->
    <TodoList v-bind:propsdata="todoItems"></TodoList>
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
      // newTodoItem : "",
      todoItems: []
    }
  },
  methods: {
    addTodoItemData: function(todoItem){
      if(todoItem !== "") {
        // todoitem을 this로 접근.
        console.log(todoItem);
        // 완료목록을 위한 객체 추가.
        var obj = {completed:false, item:todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
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