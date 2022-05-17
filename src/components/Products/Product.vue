<template>
	<v-container>
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
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			products: [],
		}
	},
	mounted() {
		this.$http.get("/products").then((result) => {
			this.products = result.data
			console.log(this.products)
		})
	},
}
</script>
