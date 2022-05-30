import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: null,
		isAuthenticated: false,
		discountProducts: [],
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
		logOutUser(state) {
			state.user = null
			state.isAuthenticated = false
		},
		deletePassword(state) {
			delete state.user.password
		},
		setDiscountProducts(state, val) {
			state.discountProducts = val
		},
		addToCart(state, val) {
			state.cart.products.push(val)
		},
		addSum(state, val) {
			state.cart.sum += val
		},
		increaseProduct(state, val) {
			state.cart.products.forEach((element) => {
				if (element.id == val.id) {
					element.amount++
				}
			})
		},
		decreaseProduct(state, val) {
			state.cart.products.forEach((element) => {
				if (element.id == val.id) {
					element.amount--
				}
			})
		},
		resetCart(state) {
			state.cart.products = []
			state.cart.sum = 0
		},
	},
	getters: {
		getCart(state) {
			return state.cart.products
		},
	},
	actions: {},
	modules: {},
	plugins: [createPersistedState()],
})

export default store
