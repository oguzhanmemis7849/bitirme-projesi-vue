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
					v-for="product in cart.products"
					:key="product"
					class="d-flex justify-space-between mb-6 pr-1"
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

					<div>
						<div class="text-end">
							{{ product.name }}
						</div>

						<div class="text-end">{{ product.price * product.amount }} TL</div>
					</div>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
// import { mapState } from "vuex"
export default {
	name: "Cart",
	data() {
		return {
			cart: { sum: 0, products: [] },
		}
	},
	methods: {},
	mounted() {
		this.cart = this.$store.state.cart
	},
}
</script>

<style></style>
