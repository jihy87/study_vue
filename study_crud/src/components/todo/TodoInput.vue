<template>
  <div class="bar_form todo">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="removeIpt()" />
    <button class="btn" v-on:click="addItem"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem : "",
      // todoItems: []
    }
  },
  methods: {
    addItem: function() {
      // // todoitem을 this로 접근.
      // console.log(this.newTodoItem);
      // // 완료목록을 위한 객체 추가.
      // var obj = {completed:false, item:this.newTodoItem};
      // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      // this.todoItems.push(obj);

      // 상위 컴포넌트로 데이터 올리기.
      this.$emit('addTodoItem', this.newTodoItem)
      this.removeIpt();
    },
    removeIpt: function() {
      // 입력 후 input창 remove.
      this.newTodoItem = "";
    }
  }
};
</script>

<style>
</style>