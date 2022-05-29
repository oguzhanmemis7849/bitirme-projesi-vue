<template>
	<div class="d-flex flex-column align-center" style="padding: 0 10% 0 10%">
		<category-bar></category-bar>
		<product class="col-9" :category="category"></product>
	</div>
</template>

<script>
import Product from "../components/Products/Product.vue"
import CategoryBar from "../components/Products/categoryBar.vue"
export default {
	data() {
		return {}
	},
	components: {
		Product,
		CategoryBar,
	},
	methods: {},
}
</script>
