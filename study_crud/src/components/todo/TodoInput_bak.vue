<template>
  <div class="bar_form todo">
    <!-- vue api 중 v-model 디렉티브는 입력되는 값을 바로바로 인스턴스에 매핑한다. data사용 -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- vue api 중 v-on 디렉티브는 methods 내부에 함수를 선언하여 이를 받아 처리한다 -->
    <button class="btn" v-on:click="addTodo"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "",
    }
  },
  methods: {
    addTodo: function() {
      // console.log(this);
      console.log(this.newTodoItem);
      // item 저장. setItem으로 저장한다. storage.setItem(keyName, keyValue); https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
      // localStorage.setItem(this.newTodoItem, this.newTodoItem);
      if(this.newTodoItem !== '') {
        // this.$emit()는 이벤트를 상위로 올린다.
        // this.$emit('이벤트 이름', 인자1, 인자2, ...)
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput();
      }
    },
    clearInput: function() {
      // input clear
      this.newTodoItem = '';
    }
  }
};
</script>

<style>
</style>