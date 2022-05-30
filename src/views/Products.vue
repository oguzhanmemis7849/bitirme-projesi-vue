<template>
	<div class="d-flex flex-column align-center" style="padding: 0 10% 0 10%">
		<div>
			<div class="d-flex flex-column align-center">
				<search style="max-width: 600px" v-if="$route.path == '/products'" />
				<category-bar></category-bar>
			</div>

			<product
				class="col-12"
				:category="category"
				@cartList="transport($event)"
			></product>
		</div>

		<!-- <cart class="col-3" :cart="cart"></cart> -->
	</div>
</template>

<script>
import Product from "../components/Products/Product.vue"
// import Cart from "../components/Products/Cart"
import CategoryBar from "../components/Products/categoryBar.vue"
import Search from "../components/Search.vue"
export default {
	data() {
		return {
			cart: [],
		}
	},
	components: {
		// Cart,
		Product,
		CategoryBar,
		Search,
	},
	methods: {
		transport(element) {
			this.cart = element
		},
	},
}
</script>
