<template>
  <div class="home">
  	<div class="container">
      <AddTodo />
  		<Todos />
  	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'
import AddTodo from '@/components/AddTodo.vue'

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo,
  }
}
</script>

<style>
body {
	margin: 0;
	padding: 0;
	font-family: "Franklin Gothic Medium";
	line-height: 1.6;
}

.container {
	max-width: 1100px;
	margin: auto;
	overflow: auto;
	padding: 0 2rem;
}
</style>
