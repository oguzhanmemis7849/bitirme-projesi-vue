<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        type="text"
        v-model="cardOwnersName"
        :rules="cardOwnersNameRules"
        label="Kart Sahibi Adı"
        required
      ></v-text-field>
      <v-text-field
        v-model="cardOwnersSurname"
        :rules="nameRules"
        label="Kart Sahibi Soyadı"
        required
      ></v-text-field>

      <v-text-field
        v-model="cardNo"
        :rules="[rules.required, rules.counter]"
        label="Kart numarası"
        counter
        maxlength="16"
      ></v-text-field>

      <v-text-field
        v-model="cardDate"
        :rules="emailRules"
        label="Son Kullanma Tarihi"
        required
      ></v-text-field>

      <v-text-field
        v-model="cardCVC"
        :rules="emailRules"
        label="CVC"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'Bilgilerinizin doğruluğunu kabul ediniz.']"
        label="Kart bilgilerimin doğruluğunu kabul ediyorum."
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="saveTheCard"
      >
        Kartı Kaydet
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "PaymentInfo",
  data() {
    return {
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
