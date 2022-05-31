<template>
	<div class="text-center">
		<v-menu offset-y :close-on-content-click="closeOnContentClick">
			<template v-slot:activator="{ on, attrs }">
				<v-btn v-bind="attrs" v-on="on" text x-large>
					<v-icon color="red" large>mdi-cart-variant </v-icon>
					<div class="cartLength">
						{{ cart.products.length }}
					</div>
				</v-btn>
			</template>

			<v-list>
				<v-list-item
					v-for="product in getCart"
					:key="product"
					class="d-flex grey lighten-2 mb-1 justify-space-between"
				>
					<img
						height="50"
						:src="require('@/assets/Products/' + product.src)"
						:alt="product.name"
					/>
					<v-spacer></v-spacer>
					<div>
						<div class="text-center">
							{{ product.name }}
						</div>

						<div class="text-center">
							{{ product.price * product.amount }} TL
						</div>
					</div>
					<v-spacer></v-spacer>
					<div class="d-flex">
						<v-btn x-small @click="increaseProduct(product)">+</v-btn>
						<div class="mx-1">{{ product.amount }}</div>
						<v-btn x-small @click="decreaseProduct(product)">-</v-btn>
					</div>
				</v-list-item>
				<v-list-item v-if="cart.products.length != 0">{{
					cart.sum
				}}</v-list-item>
				<v-list-item v-if="cart.products.length != 0" @click="resetCart">
					Sepeti Boşalt</v-list-item
				>
				<v-list-item v-else> Sepetiniz boş</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
export default {
	name: "Cart",
	data() {
		return {
			closeOnContentClick: true,
		}
	},
	methods: {
		resetCart() {
			this.$store.commit("resetCart")
			this.closeOnContentClick = true;
		},
		increaseProduct(product) {
			this.closeOnContentClick = false;
			this.cart.sum += product.price
			this.$store.commit("increaseProduct", product)
		},
		decreaseProduct(product) {
			this.closeOnContentClick = false;
			this.cart.sum -= product.price
			this.$store.commit("decreaseProduct", product)
		},
	},
	mounted() {},
	computed: {
		...mapState(["cart"]),
		...mapGetters({ getCart: "getCart" }),
	},
}
</script>

<style>
.cartLength {
	font-size: 18px;

	position: absolute;
	top: 0;
	right: 0;
}
</style>
