<template>
	<div class="d-flex">
		Kategoriler :
		<v-btn
			v-for="category in categories"
			:key="category"
			@click="sendCategory(category)"
		>
			{{ category.name }}</v-btn
		>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categories: [
				{ name: "Temel Gıda", value: "temel-gida" },
				{ name: "İçecekler", value: "icecek" },
				{ name: "Atıştırmalık", value: "atistirmalik" },
				{ name: "Temizlik Ürünleri", value: "temizlik" },
			],
			categoriedList: [],
		}
	},
	methods: {
		sendCategory(category) {
			this.categoriedList = []
			this.$http.get("/products").then((result) => {
				result.data.forEach((element) => {
					if (element.category == category.value)
						this.categoriedList.push(element)
				})
			})

			this.$store.commit("setProducts", this.categoriedList)
		},
	},
}
</script>

<style></style>
