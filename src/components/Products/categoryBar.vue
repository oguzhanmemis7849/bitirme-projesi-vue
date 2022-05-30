<template>
	<div class="d-flex justify-center">
		<v-card class="mt-3">
			<v-tabs v-model="tab" background-color="#ff0000" dark>
				<v-tab
					v-for="category in categories"
					:key="category"
					@click="sendCategory(category)"
				>
					{{ category.name }}
				</v-tab>
			</v-tabs>
		</v-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categories: [
				{
					name: "Tüm Ürünler",
				},
				{ name: "TEMEL GIDA", value: "temel-gida" },
				{ name: "İÇECEKLER", value: "icecek" },
				{ name: "ATIŞTIRMALIK", value: "atistirmalik" },
				{ name: "TEMİZLİK ÜRÜNLERİ", value: "temizlik" },
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
				this.$store.commit("setProducts", this.categoriedList)
				if (this.categoriedList.length == 0) {
					this.$store.commit("setProducts", this.$store.state.Products)
				}
			})
		},
	},
}
</script>

<style></style>
