import axios from 'axios'

const state = {
	todos: [],
}

const getters = {
	allTodos(state) {
		return state.todos
	}
}

const mutations = {
	setTodos(state, todos) {
		state.todos = todos
	},

	addTodo(state, todo) {
		state.todos.unshift(todo)
	},

	deleteTodo(state, id) {
		state.todos = state.todos.filter(todo => todo.id !== id)
	},

	updateTodo(state, updTodo) {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
}

const actions = {
	async fetchTodos({ commit }) {
		const response =  await axios.get('https://jsonplaceholder.typicode.com/todos')

		console.log(response.data)
		commit('setTodos', response.data);
	},

	async addTodo({ commit }, title) {
		// There also need to add a new todo to a database,
		// because after filtering the new todos disappear
		const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		})

		commit('addTodo', response.data)
	},

	async deleteTodo({ commit }, id) {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

		commit('deleteTodo', id)
	},

	async filterTodos({ commit }, e) {
		// console.log(e)

		// Get selected number
		const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
		
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
		)

		commit('setTodos', response.data)
	},

	async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );

    commit('updateTodo', response.data);
  }
}


export default {
	state,
	getters,
	mutations,
	actions
}