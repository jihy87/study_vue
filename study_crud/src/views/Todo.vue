<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoTab></TodoTab>
    <TodoList></TodoList>
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