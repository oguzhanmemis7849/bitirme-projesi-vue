<template>
	<v-app>
		<v-app-bar
			style="padding: 0 10% 0 10%"
			v-if="this.$store.state.isAuthenticated"
			app
			color="grey lighten-2"
			height="100px"
		>
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="@/assets/Header/moogi-header-logo.png"
					width="250"
					@click="routeHome"
				/>
			</div>
			<v-spacer></v-spacer>
			<!-- <search v-if="$route.path == '/products'" /> -->
			<v-spacer></v-spacer>
			<div class="d-flex justify-center align-center">
				<v-btn x-large text @click="routeHome">Ana Sayfa</v-btn>
				<v-btn x-large text @click="routeProducts">Ürünler</v-btn>
				<v-btn x-large text @click="routeAbout">Hakkımızda</v-btn>
				<user-info></user-info>
				<cart></cart>
			</div>
		</v-app-bar>
		<v-main>
			<router-view />
		</v-main>
		<div>footer</div>
	</v-app>
</template>

<script>
import Cart from "./components/Products/Cart.vue"
// import Search from "./components/Search.vue"
import UserInfo from "./components/userInfo.vue"

export default {
	name: "App",
	components: {
		// Search,
		UserInfo,
		Cart,
	},
	data: () => ({
		items: [
			["mdi-email", "Inbox"],
			["mdi-account-supervisor-circle", "Supervisors"],
			["mdi-clock-start", "Clock-in"],
		],
	}),
	methods: {
		routeHome() {
			this.$router.push("/")
		},
		routeProducts() {
			this.$router.push("/products")
		},
		routeAbout() {
			this.$router.push("/about")
		},
	},
}
</script>
