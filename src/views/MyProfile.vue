<template>
  <div>
    <v-container >
      <v-row>
        <v-col cols="12" md="4" sm="12" class="text-center">
          <v-icon class="bg-color-gray" size="300">mdi-account</v-icon>
          <br />
          <h1>{{ this.userName }}</h1>
        </v-col>
        <v-col cols="12" md="4" sm="12" class=" mt-10" >
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            v-on:submit.prevent
          >
            <v-text-field
              v-model="firstName"
              type="text"
              label="İsim"
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              type="text"
              label="Soyisim"
            ></v-text-field>
            <v-text-field
              v-model="email"
              type="email"
              label="E-mail"
            ></v-text-field>
            <v-text-field
              v-model="phoneNumber"
              type="tel"
              label="Telefon Numarası"
            ></v-text-field>
            <v-text-field
              v-model="address"
              type="text"
              label="Adres"
            ></v-text-field>
            <v-text-field
              v-model="birthday"
              type="date"
              label="Doğum Tarihi"
            ></v-text-field>
            <!-- <v-select
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
  name: "myProfile",
  data() {
    return {
      userName:
        this.$store.state.user.firstName.charAt(0).toUpperCase() +
        this.$store.state.user.firstName.slice(1) +
        " " +
        this.$store.state.user.lastName.charAt(0).toUpperCase() +
        this.$store.state.user.lastName.slice(1),
        email: this.$store.state.user.email,
        firstName: this.$store.state.user.firstName,
        lastName: this.$store.state.user.lastName
    };
  },
  methods:{
      saveForm() {
          this.$http.post("/users", { ...this.userData }).then(alert("Başarıyla Üye Oldunuz!"))
      },
  }
};
</script>

<style scoped>
.bg-color-gray{
    background-color: #e0e0e0 ;
    border-radius: 25px;
}
</style>
