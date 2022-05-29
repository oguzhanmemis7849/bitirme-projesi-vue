<template>
<<<<<<< HEAD
	<div>
		<v-container>
			<v-row>
				<v-col cols="12" md="4" sm="12" class="text-center">
					<v-icon class="bg-color-gray" size="300">mdi-account</v-icon>
					<br />
					<h1>{{ this.userData.userName }}</h1>
				</v-col>
				<v-col cols="12" md="4" sm="12" class="mt-10">
					<v-form
						ref="form"
						v-model="valid"
						lazy-validation
						v-on:submit.prevent
					>
						<v-text-field
							v-model="userData.firstName"
							type="text"
							label="İsim"
						></v-text-field>
						<v-text-field
							v-model="userData.lastName"
							type="text"
							label="Soyisim"
						></v-text-field>
						<v-text-field
							v-model="userData.email"
							type="email"
							label="E-mail"
							readonly
						></v-text-field>
						<v-text-field
							v-model="userData.phoneNumber"
							type="tel"
							label="Telefon Numarası"
						></v-text-field>
						<v-text-field
							v-model="userData.address"
							type="text"
							label="Adres"
						></v-text-field>
						<v-text-field
							v-model="userData.birthday"
							type="date"
							label="Doğum Tarihi"
						></v-text-field>
						<!-- <v-select
=======
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" sm="12" class="text-center">
          <v-icon class="bg-color-gray" size="300">mdi-account</v-icon>
          <br />
          <h1>{{ this.userName }}</h1>
        </v-col>
        <v-col cols="12" md="4" sm="12" class="mt-10">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            v-on:submit.prevent
          >
            <v-text-field
              v-model="userData.firstName"
              type="text"
              label="İsim"
            ></v-text-field>
            <v-text-field
              v-model="userData.lastName"
              type="text"
              label="Soyisim"
            ></v-text-field>
            <v-text-field
              v-model="userData.email"
              type="email"
              label="E-mail"
              readonly
            ></v-text-field>
            <v-text-field
              v-model="userData.phoneNumber"
              type="tel"
              label="Telefon Numarası"
            ></v-text-field>
            <v-text-field
              v-model="userData.address"
              type="text"
              label="Adres"
            ></v-text-field>
            <v-text-field
              v-model="userData.birthday"
              type="date"
              label="Doğum Tarihi"
            ></v-text-field>
            <!-- <v-select
>>>>>>> 1fd34ca2bf5778ad3e69897a9f60b285be3146f3
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="Item"
              required
            ></v-select> -->
						<v-btn type="submit" color="success" class="mr-4" @click="saveForm">
							Kaydet
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
<<<<<<< HEAD
	name: "myProfile",
	data() {
		return {
			userData: {
				userName:
					this.$store.state.user.firstName.charAt(0).toUpperCase() +
					this.$store.state.user.firstName.slice(1) +
					" " +
					this.$store.state.user.lastName.charAt(0).toUpperCase() +
					this.$store.state.user.lastName.slice(1),
				email: this.$store.state.user.email,
				firstName: this.$store.state.user.firstName,
				lastName: this.$store.state.user.lastName,
				phoneNumber: this.$store.state.user.phoneNumber,
				address: this.$store.state.user.address,
				birthday: this.$store.state.user.birthday,
			},
		}
	},
	methods: {
		saveForm() {
			this.$store.commit("setUser", this.userData)
			this.$http.put(`/users?email=${this.userData.email}`, this.userData)
		},
	},
}
=======
  name: "myProfile",
  data() {
    return {
      user: {},
      userName:
        this.$store.state.user.firstName.charAt(0).toUpperCase() +
        this.$store.state.user.firstName.slice(1) +
        " " +
        this.$store.state.user.lastName.charAt(0).toUpperCase() +
        this.$store.state.user.lastName.slice(1),
      userData: {
        email: this.$store.state.user.email,
        firstName: this.$store.state.user.firstName,
        lastName: this.$store.state.user.lastName,
        phoneNumber: this.$store.state.user.phoneNumber,
        address: this.$store.state.user.address,
        birthday: this.$store.state.user.birthday,
        id: this.$store.state.user.id,
      },
    };
  },
  methods: {
    saveForm() {
      console.log(this.userData.id);
      this.$http
        .put(`/users/${this.userData.id}`, this.userData)
        .then((res) => {
          this.userData = res;
        })
        .catch((err) => {
          console.log(err);
        });
      this.$store.commit("setUser", this.userData);
    },
   
  },
};
>>>>>>> 1fd34ca2bf5778ad3e69897a9f60b285be3146f3
</script>

<style scoped>
.bg-color-gray {
<<<<<<< HEAD
	background-color: #e0e0e0;
	border-radius: 25px;
=======
  background-color: #e0e0e0;
  border-radius: 25px;
>>>>>>> 1fd34ca2bf5778ad3e69897a9f60b285be3146f3
}
</style>
