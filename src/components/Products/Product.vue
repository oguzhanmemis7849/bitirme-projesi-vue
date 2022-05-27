<template>
	<v-container>
		<v-row class="pl-4 pt-4" justify="center">
			<v-card
				v-for="product in products"
				:key="product"
				class="ma-3 px-0 col-1 d-flex flex-column align-center"
				style="height: 360px"
				hover
			>
				<img
					height="190"
					:src="require('@/assets/Products/' + product.src)"
					:alt="product.name"
					class="ml-0"
				/>

				<v-card-title>
					<div style="font-size: 19px">
						{{ product.name }}
					</div>
				</v-card-title>

				<v-card-text class="text-center">{{ product.price }} tl</v-card-text>
				<v-card-actions>
					<v-btn color="error" @click="addCart(product)"> Sepete Ekle!</v-btn>
				</v-card-actions>
			</v-card>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			products: [],
			cart: { sum: 0, products: [] },
		}
	},
	mounted() {
		this.$http.get("/products").then((result) => {
			result.data.forEach((element) => {
				element.amount = 1
			})
			this.products = result.data
		})
	},
	methods: {
		addCart(product) {
			if (!this.cart.products.includes(product)) {
				this.cart.products.push(product)
				this.cart.sum += product.price * product.amount
				this.$emit("cartList", this.cart)
			}
		},
	},
}
</script>
