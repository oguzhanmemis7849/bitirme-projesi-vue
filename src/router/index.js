import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import Products from "../views/Products.vue"
import About from "../views/About.vue"
import store from "../store"

Vue.use(VueRouter)

const routes = [
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/products",
		name: "Products",
		component: Products,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, _, next) => {
	const authRequiredRoutes = ["Home", "About", "Products"]
	const authNotRequiredRoutes = ["Login"]
	const _isAuthenticated = store.state.isAuthenticated

	if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated)
		next(false)

	if (authRequiredRoutes.indexOf(to.name) > -1) {
		if (_isAuthenticated) next()
		else next({ name: "Login" })
	} else {
		next()
	}
})

export default router
