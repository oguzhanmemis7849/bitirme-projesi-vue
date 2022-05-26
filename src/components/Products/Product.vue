<template>
	<!-- <v-container>
		<v-layout>
			<v-flex xs12 sm2 class="d-flex">
				<v-card
					hover
					v-for="product in products"
					:key="product"
					class="d-flex flex-column justify-center mx-3"
				>
					<v-img
						:src="require('@/assets/Products/' + product.src)"
						:alt="s"
						height="200"
						weight="50"
						class="d-flex flex-column justify-center"
					></v-img>

					<v-card-title class="d-flex flex-column justify-center">
						{{ product.name }}
					</v-card-title>

					<v-card-text class="text-center"> {{ product.price }} </v-card-text>

					<v-card-actions class="d-flex flex-column justify-center">
						<v-btn color="error">Sepete Ekle!</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container> -->

	<v-container>
		<v-row class="pl-4 pt-4" justify="center">
			<v-card
				v-for="product in products"
				:key="product"
				class="ma-3 px-0 col-1 d-flex flex-column align-center"
				hover
			>
				<v-img
					height="280"
					:src="require('@/assets/Products/' + product.src)"
					:alt="product.name"
					class="ml-0"
				>
				</v-img>

				<v-card-title>
					<div class="font-weight-bold ml-1">
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
				console.log(this.cart)
				this.$emit("cartList", this.cart)
			}
		},
	},
}
</script>
