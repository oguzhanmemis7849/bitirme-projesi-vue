<template>
	<v-container>
		<v-row class="pl-4 pt-4" justify="center">
			<div v-if="this.$store.state.filteredProducts.length == 0">
				Aradığınız ürün bulunmamaktadır. Lütfen ürünün adını düzgün yazdığınıza
				emin olunuz!
			</div>
			<v-card
				v-for="product in this.$store.state.filteredProducts"
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
			cart: { sum: 0, products: [] },
		}
	},
	mounted() {
		this.$http.get("/products").then((result) => {
			result.data.forEach((element) => {
				element.amount = 1
			})

			this.$store.commit("setProducts", result.data)
			this.$store.commit("resetProducts", result.data)
		})
	},
	methods: {
		addCart(product) {
			if (!this.cart.products.includes(product)) {
				product.amount = 1
				this.cart.products.push(product)
				this.cart.sum += product.price * product.amount
				this.$emit("cartList", this.cart)
			}
		},
	},
}
</script>
