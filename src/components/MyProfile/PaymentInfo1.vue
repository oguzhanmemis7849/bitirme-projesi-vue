<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        type="text"
        v-model="cardOwnersName"
        :rules="[rules.required]"
        label="Kart Sahibi Adı"
        required
      ></v-text-field>
      <v-text-field
        type="text"
        v-model="cardOwnersSurname"
        :rules="[rules.required]"
        label="Kart Sahibi Soyadı"
        required
      ></v-text-field>

      <v-text-field
        v-model="cardNo"
        :rules="[rules.required, rules.counter]"
        label="Kart numarası"
        placeholder="1234 5678 9123 456"
        counter
        @change="updateValue"
        :maxlength="16"
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
  filters: {
    formatCardNumber(value){
      return value ? value.match(/.{1,4}/g).join(' ') : '';
    } 
  },
  methods: {
    saveTheCard() {
      this.$refs.form.validate();
    },
    updateValue(e){
       this.cardNumber = e.target.value.replace(/ /g,'');
    }
  },
};
</script>

<style></style>
