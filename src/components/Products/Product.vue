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
				style="height: 360px; min-width: 190px"
				hover
			>
				<img
					v-if="discountList.includes(product.name)"
					src="@/assets/Products/indirim.png"
					alt=""
					class="discountIcon"
				/>
				<img
					height="190"
					:src="require('@/assets/Products/' + product.src)"
					:alt="product.name"
					class="ml-0"
				/>
				<v-card-title>
					<div class="productTitle">
						{{ product.name }}
					</div>
				</v-card-title>
				<v-card-text
					v-if="discountList.includes(product.name)"
					class="text-center text-decoration-line-through discountPrice"
					><strong
						>{{ product.price + product.name.length }} TL</strong
					></v-card-text
				>
				<v-card-text class="text-center pa-0"
					><strong>{{ product.price }} TL</strong></v-card-text
				>
				<v-card-actions>
					<v-btn color="error" @click="addCart(product);"> Sepete Ekle!</v-btn>
				</v-card-actions>
			</v-card>
		</v-row>
		<v-snackbar :timeout="timeout" color="#ff0000" v-model="snackbar"><strong>Bu ürünü sepetinize daha önce eklediniz. "Sepetiniz"e giderek ürün miktarını değiştirebilirsiniz.</strong></v-snackbar>
	</v-container>
</template>

<script>
export default {
	props: ["category"],
	data() {
		return {
			discountList: [],
			snackbar: false,
			timeout: 4000,
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
		this.discountList = this.$store.state.discountProducts.map((item) => {
			return item.name
		})
	},
	methods: {
		addCart(product, sum) {
			if (
				!this.$store.state.cart.products
					.map((element) => element.name)
					.includes(product.name)
			) {
				product.amount = 1
				sum = product.price * product.amount
				this.$store.commit("addToCart", product)
				this.$store.commit("addSum", sum)

			} else{
				this.snackbar = true
			}
		},
	},
}
</script>

<style scoped>
.discountIcon {
	position: absolute;
	top: 0;
	right: 0;
}
.discountPrice {
	position: absolute;
	top: 250px;
	color: red !important;
}
.productTitle{
	font-family: libel;
	font-size: 25px;
	
}
</style>
