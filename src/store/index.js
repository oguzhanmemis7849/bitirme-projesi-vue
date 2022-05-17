import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: { user: null, isAuthenticated: false },
	mutations: {
		setUser(state, user) {
			state.user = user
			state.isAuthenticated = true
		},
		deletePassword(state) {
			delete state.user.password
		},
	},
	actions: {},
	modules: {},
	plugins: [createPersistedState()],
})

export default store
