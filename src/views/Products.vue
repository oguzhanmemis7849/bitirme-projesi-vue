<template>
	<div class="d-flex" style="padding: 0 10% 0 10%">
		<div>
			<category-bar></category-bar>
			<product
				class="col-9"
				:category="category"
				@cartList="transport($event)"
			></product>
		</div>

		<cart class="col-3" :cart="cart"></cart>
	</div>
</template>

<script>
import Product from "../components/Products/Product.vue"
import Cart from "../components/Products/Cart"
import CategoryBar from "../components/Products/categoryBar.vue"
export default {
	data() {
		return {
			cart: [],
		}
	},
	components: {
		Cart,
		Product,
		CategoryBar,
	},
	methods: {
		transport(element) {
			this.cart = element
		},
	},
}
</script>
