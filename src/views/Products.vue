<template>
	<div class="d-flex" style="padding: 0 10% 0 10%">
		<product class="col-9" @cartList="transport($event)"></product>

		<cart class="col-3" :cart="cart"></cart>
	</div>
</template>

<script>
import Product from "../components/Products/Product.vue"
import Cart from "../components/Products/Cart"
export default {
	data() {
		return {
			cart: [],
		}
	},
	components: {
		Cart,
		Product,
	},
	methods: {
		transport(element) {
			this.cart = element
		},
	},
}
</script>
