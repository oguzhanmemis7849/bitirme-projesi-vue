<template>
	<v-form
		style="margin-top:25px; display:flex; justify-content:center; align-items;center"
	>
		<v-text-field
			dense
			outlined
			style="margin-right: 5px; width: 300px"
			v-model="searchProducts"
			label="Ürün Arayın"
		></v-text-field>
		<v-btn color="error" @click="search"> Ara </v-btn>
	</v-form>
</template>

<script>
export default {
	data() {
		return {
			searchProducts: "",
			filteredCart: [],
		}
	},

	methods: {
		search() {
			this.$http.get("/products").then((result) => {
				result.data.forEach((element) => {
					if (
						element.name
							.toLowerCase()
							.includes(this.searchProducts.toLowerCase())
					) {
						this.filteredCart.push(element)
					}
				})
				console.log(this.filteredCart)
			})
			this.filteredCart = []
		},
	},
}
</script>

<style></style>
