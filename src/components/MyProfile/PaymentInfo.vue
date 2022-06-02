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
        data-card-field
        id="v-card-name"
        type="text"
        v-model="valueFields.cardName"
        label="Kart Sahibi Adı ve Soyadı"
        required
        outlined
      ></v-text-field>
      <v-text-field
        data-card-field
        id="v-card-number"
        v-model="valueFields.cardNumber"
        label="Kart numarası"
        type="number"
        outlined
      ></v-text-field>

      <!-- <v-text-field
        type="month"
        v-model="valueFields.cardMonth"
        :rules="emailRules"
        label="Son Kullanma Tarihi"
        required
        outlined
      ></v-text-field> -->

      <div class="d-flex justif-center">
        <v-select
          data-card-field
          id="v-card-month"
          v-model="valueFields.cardMonth"
          :items="months"
          label="Ay"
          outlined
        ></v-select>
        <v-select
          data-card-field
          id="v-card-year"
          v-model="valueFields.cardYear"
          :items="years"
          label="Yıl"
          outlined
        ></v-select>
      </div>

      <v-text-field
        data-card-field
        id="v-card-cvv"
        v-model="valueFields.cardCvv"
        label="CVV"
        required
        outlined
      ></v-text-field>

      <v-btn color="success" class="mr-4" @click="saveTheCard">
        Kartı Kaydet
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { VuePaycard } from "vue-paycard";
export default {
  components: {
    VuePaycard,
  },
  data() {
    return {
      months: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
      years: ["2022", "2023", "2024", "2024", "2025", "2026", "2027", "2028"], //şimdilik elle verildi dinamik yap
      valueFields: {
        cardName: "",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
        cardCvv: "",
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
        counter: (value) => value.length <= 16 || "En fazla 16 karakter",
      },
    };
  },
  methods: {
    saveTheCard() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style></style>
