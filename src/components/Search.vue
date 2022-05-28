<template>
	<v-form
		style="margin-top:25px; display:flex; justify-content:center; align-items;center"
	>
		<v-btn
			v-if="searchProducts.length != 0"
			@click="reset"
			style="min-width: 45px !important"
			class="mr-1 px-0"
			color="red"
			dark
		>
			<v-icon dark> mdi-cancel </v-icon>
		</v-btn>
		<v-text-field
			dense
			outlined
			style="margin-right: 5px; width: 300px"
			v-model="searchProducts"
			label="Ürün Arayın"
			@keydown.enter="search"
		>
		</v-text-field>
		<v-btn color="error" @click="search"> Ara </v-btn>
	</v-form>
</template>

<script>
export default {
	data() {
		return {
			searchProducts: "",
			filteredProducts: [],
		}
	},
	methods: {
		search(event) {
			event.preventDefault()
			this.filteredProducts = []
			this.$http.get("/products").then((result) => {
				result.data.forEach((element) => {
					if (
						element.name
							.toLowerCase()
							.includes(this.searchProducts.toLowerCase())
					) {
						this.filteredProducts.push(element)
					}
				})
			})
			this.$store.commit("setProducts", this.filteredProducts)
		},
		reset() {
			this.searchProducts = ""
			this.$store.commit("setProducts", this.$store.state.Products)
		},
	},
}
</script>
