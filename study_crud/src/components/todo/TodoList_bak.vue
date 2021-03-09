<template>
  <div class="list">
    <div class="list_head">
      <button class="btn">Finish로 이동</button>
      <button class="btn" v-on:click="clearTodo">clear all</button>
    </div>
    <ul>
      <!-- <li v-for="todoItem in todoItems" v-bind:key="todoItem"> -->
      <!-- v-for에는 내장 index가 있다. -->
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
        <div class="item" v-on:click="toggleComplete(todoItem, index)">
            <i class="far" v-bind:class="{'fa-check-square': todoItem.completed, 'fa-square': !todoItem.completed}"></i>
            <!-- <span>{{ todoItem }}</span> -->
            <!-- todoItem completed 속성이 true일 때 class 삽입. -->
          <span v-bind:class="{done: todoItem.completed}">
            {{ todoItem.item }}
          </span>
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
  props: ['propsdata'],
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit('removeItem',todoItem, index)
    },
    toggleComplete: function(todoItem, index) {
      this.$emit('toggleItem',todoItem, index)
    },
    clearTodo: function() {
      this.$emit('clearAll')
    }
  }
};
</script>

<style>
</style>