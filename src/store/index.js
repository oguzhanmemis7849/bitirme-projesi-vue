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
		Products: [],
	},
	mutations: {
		resetProducts(state, products) {
			state.Products = products
		},
		setProducts(state, products) {
			state.filteredProducts = products
		},
		setUser(state, user) {
			state.user = user
			state.isAuthenticated = true
		},
		logOutUser(state){
			state.user = null
			state.isAuthenticated = false
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
