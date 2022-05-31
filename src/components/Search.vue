<template>
	<v-form
		style="margin-top:25px; display:flex; justify-content:center; align-items;center"
		v-on:submit.prevent
	>
		<v-autocomplete
			v-model="searchProducts"
			:items="items"
			outlined
			dense
			label="Ürün Arayın"
			clearable
			@click:clear="reset"
			@keydown.enter="search"
		></v-autocomplete>

		<v-btn color="error" @click="search"> Ara </v-btn>
	</v-form>
</template>

<script>
export default {
	data() {
		return {
			searchProducts: "",
			filteredProducts: [],
			items: this.$store.state.Products.map((item) => item.name),
		}
	},

	methods: {
		search() {
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
