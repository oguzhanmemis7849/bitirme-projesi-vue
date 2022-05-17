<template>
	<div>
		<input v-model="userData.username" type="text" />
		<input v-model="userData.fullname" type="text" />
		<input v-model="userData.password" type="text" />
		<button>ASDSADASSAD</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userData: {
				username: null,
				fullname: null,
				password: null,
			},
		}
	},
	methods: {},
}
</script>
