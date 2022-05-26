<template>
	<div class="d-flex red align-center flex-column pt-8 sticky">
		<v-navigation-drawer width="70%" floating class="red of">
			<div
				class="d-flex white--text text-center text-h4 justify-space-between align-center mb-10"
			>
				SEPETİM
				<div class="d-flex justify-center">
					<img
						src="@/assets/Products/cart.png"
						alt=" "
						height="45"
						width="45"
					/>
				</div>
			</div>
			<div class="of">
				<div
					v-for="product in cart.products"
					:key="product"
					class="d-flex justify-space-between mb-6 pr-1"
				>
					<div class="white--text">
						<v-btn
							class="white"
							elevation="2"
							text
							x-small
							@click="increase(product)"
						>
							+</v-btn
						>
						{{ product.amount }}
						<v-btn
							class="white"
							elevation="2"
							text
							x-small
							@click="decrease(product)"
							>-</v-btn
						>
					</div>

					<div>
						<div class="white--text text-end">
							{{ product.name }}
						</div>

						<div class="white--text text-end">
							<v-divider></v-divider>
							{{ product.price }} x {{ product.amount }} =
							{{ product.price * product.amount }} TL
						</div>
					</div>
				</div>
			</div>

			<div v-if="this.cart.sum > 0" class="white--text text-end">
				Toplam Ücret : {{ cart.sum }} TL
			</div>
			<div v-if="!this.cart.sum > 0" class="white--text">
				Sepetinizde Ürün Bulunmamaktadır!
			</div>

			<div v-if="this.cart.sum > 0" class="d-flex justify-end mt-5">
				<v-btn>Ödemeye Geç!</v-btn>
			</div>
		</v-navigation-drawer>
	</div>
</template>

<style>
::-webkit-scrollbar {
	width: 8px;
	height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
	background: rgb(255, 242, 242);
	border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #fa6060;
	border-radius: 10px;
}

.of {
	overflow: auto;
	overflow-y: auto;
	height: 30vw;
}
.sticky {
	height: 44vw;
	position: sticky !important;
	top: 10.5%;
}
</style>

<script>
export default {
	props: ["cart"],
	methods: {
		increase(product) {
			product.amount++
			this.cart.sum += product.price
		},
		decrease(product) {
			product.amount--
			this.cart.sum -= product.price
			if (product.amount == 0) {
				product.amount++
				this.cart.products.splice(
					this.cart.products.findIndex((e) => e.name === product.name),
					1
				)
			}
		},
	},
}
</script>
