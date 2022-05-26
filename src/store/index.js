import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: null,
		isAuthenticated: false,
		cart: {
			sum: 0,
			products: [],
		},
	},
	mutations: {
		setUser(state, user) {
			state.user = user
			state.isAuthenticated = true
		},
		deletePassword(state) {
			delete state.user.password
		},
	},
	getters: {},
	actions: {},
	modules: {},
	plugins: [createPersistedState()],
})

export default store
