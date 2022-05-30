<template>
	<div class="text-center">
		<v-menu offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-btn v-bind="attrs" v-on="on" text x-large>
					<v-icon large>mdi-cart-variant</v-icon>
				</v-btn>
			</template>
			<v-list>
				<v-list-item
					v-for="product in this.cart.products"
					:key="product"
					class="d-flex grey lighten-2 mb-1 justify-space-between"
				>
					<!-- <div class="white--text">
						<v-btn
							class="white"
							elevation="2"
							text
							x-small
							@click="decrease(product)"
							>-</v-btn
						>
						{{ product.amount }}
						<v-btn
							class="white"
							elevation="2"
							text
							x-small
							@click="increase(product)"
						>
							+</v-btn
						>
					</div> -->

					<img
						height="50"
						:src="require('@/assets/Products/' + product.src)"
						:alt="product.name"
						S
					/>
					<div>
						<div class="text-center">
							{{ product.name }}
						</div>

						<div class="text-center">
							{{ product.price * product.amount }} TL
						</div>
					</div>
				</v-list-item>
				<v-list-item>{{ cart.sum }}</v-list-item>
				<v-list-item v-if="cart.products.length != 0" @click="resetCart">
					Sepeti Boşalt</v-list-item
				>
				<v-list-item v-else> Sepetiniz boş</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
import { mapState } from "vuex"
export default {
	name: "Cart",
	data() {
		return {}
	},
	methods: {
		resetCart() {
			this.cart.products = []
		},
	},
	mounted() {
		console.log(this.cart)

		// this.$store.state.cart.sum = 0
		// this.$store.state.cart.products = []
	},
	computed: {
		...mapState(["cart"]),
	},
}
</script>

<style></style>
