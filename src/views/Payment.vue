<template>
  <div class="d-flex justify-center align-center">
    <div class="section">
    <h1 class="red--text">Ödeme</h1>
    <div class="d-flex">
      <h2 class="red--text">Toplam Tutar:</h2>
      <h2>{{ $store.state.cart.sum }} TL</h2>
    </div>
    <div class="d-flex">
      <h2 class="red--text">Teslimat adresi:</h2>
      <h2>{{ $store.state.user.address }}</h2>
    </div>
    <v-btn class="primary" @click="goToMyProfile">Adresi güncelle</v-btn>
    <h2 class="red--text">Kart Seçiniz</h2>
    <v-form v-model="valid" lazy-validation>
      <v-select
        :rules="[rules.required]"
        :items="myCardNames"
        label="Kayıtlı Kartlarınız"
        dense
      ></v-select>
      <div class="d-flex justify-center">
        <v-btn
              v-bind="attrs"
              v-on="on"
              color="error"
              :disabled="!valid"
              @click="pay"
              >Sipariş Ver</v-btn
            >
      </div>

      <v-dialog v-model="dialog" transition="dialog-top-transition" width="500">
        <v-card class="bg-image">
          <v-card-title
            class="text-h4 white--text d-flex justify-center"
            style="padding-top: 120px"
          >
            Ödeme Başarılı !
          </v-card-title>
          <v-card-text class="explan">
            Siparişiniz başarıyla alındı. En kısa sürede teslim edeceğiz.
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-form>
  </div>
  <v-snackbar :timeout="timeout" color="#ff0000" v-model="snackbar"><strong>Sepetinizde hiç ürün yok</strong></v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
			timeout: 4000,
      dialog: false,
      valid: false,
      rules: { required: (value) => !!value || "Lütfen kart seçiniz." },
      myCardNames: this.$store.state.user.creditCard.map((card) => {
        return card.nameOfTheCard;
      }),
    };
  },
  mounted() {
    this.valid = false;
  },
  methods: {
    goToMyProfile() {
      this.$router.push("/myProfile");
    },
    pay() {
      if(this.$store.state.cart.sum == 0 ){
        this.snackbar = true
      }
      else{
        this.dialog = true;
        setTimeout(() => {
          this.$store.commit("resetCart");
        this.$router.push("/");
          this.dialog = false;
      }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.bg-image {
  width: 500px;
  height: 300px;
  top: 0;
  left: 0;
  background: url("../assets/Login/login-background.png") no-repeat center
    center;
  background-size: cover;
}
.explan {
  color: white !important;
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
}
.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  border: 5px solid #ff0000;
  border-radius: 20px;
  min-width: 650px;
  min-height: 700px;
  padding: 25px;
}
h1{
  font-family: Libel;
  font-size:40px
}
h2{
  font-family: Libel;
  font-size:30px
}
</style>
