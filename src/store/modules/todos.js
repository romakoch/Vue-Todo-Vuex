import axios from 'axios'

const state = {
	todos: [
		{
			id: 1,
			title: "Title 1"
		},
		{
			id: 2,
			title: "Title 2"
		},
	]
}

const getters = {
	allTodos(state) {
		return state.todos
	}
}

const mutations = {
	setTodos(state, todos) {
		state.todos = todos
	}
}

const actions = {
	async fetchTodos({ commit }) {
		const response =  await axios.get('https://jsonplaceholder.typicode.com/todos')
		
		console.log(response.data)
		commit('setTodos', response.data);
	}
}


export default {
	state,
	getters,
	mutations,
	actions
}