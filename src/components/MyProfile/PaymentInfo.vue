<template>
  <div>
    <vue-paycard
      :value-fields="valueFields"
      :labels="labels"
      :isCardNumberMasked="false"
      :inputFields="inputFields"
    />
    <v-form class="pa-16" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        :rules="[rules.required]"
        data-card-field
        id="v-card-name"
        type="text"
        v-model="valueFields.cardName"
        label="Kart Sahibi Adı ve Soyadı"
        outlined
      ></v-text-field>

      <v-text-field
        :rules="[rules.required]"
        data-card-field
        id="v-card-number"
        v-model="valueFields.cardNumber"
        label="Kart numarası"
        type="text"
        outlined
        :maxlength="cardNumberMaxLength"
        @input="changeNumber"
      ></v-text-field>

      <div class="d-flex justif-center">
        <v-select
          :rules="[rules.required, rules.past]"
          data-card-field
          id="v-card-month"
          v-model="valueFields.cardMonth"
          :items="months"
          label="Ay"
          outlined
        ></v-select>
        <v-select
          :rules="[rules.required]"
          data-card-field
          id="v-card-year"
          v-model="valueFields.cardYear"
          :items="years"
          label="Yıl"
          outlined
        >
        </v-select>
        <v-text-field
          :rules="[rules.required]"
          data-card-field
          id="v-card-cvv"
          v-model="valueFields.cardCvv"
          :maxLength="cvvMaxLength"
          label="CVV"
          required
          outlined
        ></v-text-field>
      </div>

      <v-checkbox
        :rules="[rules.required]"
        label="Bilgilerimin doğruluğunu kabul ediyorum."
      ></v-checkbox>

      <div class="d-flex justify-center">
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="saveTheCard"
        >
          Kartı Kaydet
        </v-btn>
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Kartınıza Bir İsim Verin
            </v-card-title>

            <v-container>
              <v-text-field
                v-model="valueFields.nameOfTheCard"
                label="Kart İsmi"
              ></v-text-field>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" text @click="saveTheCardWithName">
                Kaydet
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-form>
  </div>
</template>

<script>
import { VuePaycard } from "vue-paycard";
import { mapState } from "vuex";
export default {
  components: {
    VuePaycard,
  },
  data() {
    return {
      // nameOfTheCard: "",
      dialog: false,
      valid: true,
      timeToExpire: 9,
      cardNumberMaxLength: 19,
      cvvMaxLength: 3,
      months: [
        "0" + 1,
        "0" + 2,
        "0" + 3,
        "0" + 4,
        "0" + 5,
        "0" + 6,
        "0" + 7,
        "0" + 8,
        "0" + 9,
        10,
        11,
        12,
      ],
      years: [],
      valueFields: {
        cardName: "",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
        cardCvv: "",
        nameOfTheCard: "",
      },
      labels: {
        cardName: "Ad Soyad",
        cardHolder: "Kart Sahibi",
        cardMonth: "AY",
        cardYear: "YY",
        cardExpires: "SKT",
        cardCvv: "CVV",
      },
      inputFields: {
        cardNumber: "v-card-number",
        cardName: "v-card-name",
        cardMonth: "v-card-month",
        cardYear: "v-card-year",
        cardCvv: "v-card-cvv",
      },
      rules: {
        required: (value) => !!value || "Bu alan zorunludur.",
        // past:(value) => new Date().getMonth() < value || "Ay hatası",
      },
      userData: {
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        firstName: this.$store.state.user.firstName,
        lastName: this.$store.state.user.lastName,
        phoneNumber: this.$store.state.user.phoneNumber,
        address: this.$store.state.user.address,
        birthday: this.$store.state.user.birthday,
        id: this.$store.state.user.id,
        profilePicture: this.$store.state.user.profilePicture,
        creditCard: [],
      },
    };
  },
  beforeMount() {
    this.expirationDate();
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    //kart son kullanma tarihi
    expirationDate() {
      let yearNow = new Date().getFullYear();
      for (let i = yearNow; i < yearNow + this.timeToExpire; i++) {
        this.years.push(i);
      }
    },
    saveTheCard() {
      this.$refs.form.validate();
      if (this.$refs.form.validate() == true) {
        this.dialog = true;
      }
    },
    saveTheCardWithName() {
      this.$store.commit("addCard", this.valueFields);
      this.$http
        .put(`/users/${this.userData.id}`, this.userData)
        .then((res) => {
          this.userData = res;
        });
      console.log(this.user);
      this.dialog = false;
      window.location.reload();
    },
    changeNumber() {
      let realNumber = this.valueFields.cardNumber.replace(/ /gi, "");
      let dashedNumber = realNumber.match(/.{1,4}/g);
      this.valueFields.cardNumber = dashedNumber.join(" ");
    },
  },
};
</script>

<style></style>
