<template>
  <div class="about">
    <h1>{{this.$store.state.count}}</h1>
    <button @click="increment">Increment +1</button>
    <button @click="decrement">Increment -1</button>
  </div>
</template>

<script>
	export default {
		methods: {
			increment() {
				this.$store.commit('increment')
    		console.log(this.$store.state.count)
			},
			decrement() {
				this.$store.commit('decrement')
    		console.log(this.$store.state.count)
			}
		}
	}
</script>
