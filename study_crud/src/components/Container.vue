<template>
  <div class="container">
    <List/>
    <Write/>
  </div>
</template>

<script>
import List from './List.vue'
import Write from './Write.vue'

export default {
  name: '',
  components: {
    List,
    Write,
  }
}
</script>

<style>
.container {
  padding:1rem;
}
</style>