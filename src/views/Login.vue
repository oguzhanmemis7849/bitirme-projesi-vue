<template>
  <div>
    <v-app>
      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <card :cardTitle="cardTitle" :cardText="cardText"></card>
        <!-- <v-img src="@/assets/Header/moogi-header-logo.png"></v-img> -->
        <div :isLoggedPanelOpen="isLoggedPanelOpen">
          <v-tabs
            v-model="tab"
            show-arrows
            background-color="#ff0000"
            icons-and-text
            dark
            grow
          >
            <v-tabs-slider color="purple darken-4"></v-tabs-slider>
            <v-tab v-for="i in tabs" :key="i">
              <v-icon large>{{ i.icon }}</v-icon>
              <div class="caption py-1">{{ i.name }}</div>
            </v-tab>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="loginForm" v-model="valid" lazy-validation>
                    <v-row align="center" justify="center">
                      <v-col cols="6">
                        <v-img
                          src="@/assets/Header/moogi-header-logo.png"
                          width="250px"
                        ></v-img>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          outlined
                          color="green"
                          v-model="loginEmail"
                          :rules="loginEmailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          outlined
                          color="green"
                          v-model="loginPassword"
                          :append-icon="show1 ? 'eye' : 'eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Şifre"
                          hint="En az 8 karakter"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3" xsm="12" align-end>
                        <v-btn
                          class="mt-3"
                          v-if="!progressBar"
                          large
                          block
                          :disabled="!valid"
                          color="error"
                          @click="validate"
                        >
                          Giriş Yap
                        </v-btn>
                        <div class="d-flex justify-center" v-else>
                          <v-progress-circular
                            indeterminate
                            color="success"
                          ></v-progress-circular>
                        </div>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="registerForm" v-model="valid" lazy-validation>
                    <v-row class="d-flex justify-center">
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          outlined
                          color="green"
                          v-model="userData.firstName"
                          :rules="[rules.required]"
                          label="İsim"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          outlined
                          color="green"
                          v-model="userData.lastName"
                          :rules="[rules.required]"
                          label="Soyisim"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          outlined
                          color="green"
                          v-model="userData.email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          outlined
                          color="green"
                          v-model="userData.password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Şifre"
                          hint="Minimum 8 Karakter"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          outlined
                          color="green"
                          block
                          v-model="verify"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, passwordMatch]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Şifre Tekrar"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="3" xsm="12">
                        <v-dialog
                          v-model="registerDialog"
                          persistent
                          width="500"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              x-large
                              block
                              :disabled="!valid"
                              v-bind="attrs"
                              v-on="on"
                              color="success"
                              @click="registerValidate"
                              >Üye Ol</v-btn
                            >
                          </template>

                          <v-card class="bg-image">
                            <v-card-title
                              class="text-h5 white--text d-flex justify-center"
                              style="padding-top: 120px"
                            >
                              Kayıt Olma İşlemi Başarılı
                            </v-card-title>

                            <v-card-text class="white--text text-center">
                              Seni aramızda görmekten dolayı onur duyduğumuzu
                              bilmeni isteriz. Şimdi giriş yaparak, dilediğince
                              alışveriş yapabilirsin.
                            </v-card-text>
                            <v-card-actions class="d-flex justify-center">
                              <v-btn @click="registerSuccessfully">
                                Giriş Yap
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
import Card from "../components/Home/Card.vue";

export default {
  components: { Card },
  data() {
    return {
      registerDialog: false,
      cardTitle: "Moogi'ye Hoşgeldiniz...",
      cardText:
        "Uygulamamızı kullanmak için kayıt olmanız veya üye girişi yapmanız gerekmektedir.",
      progressBar: false,
      dialog: true,
      tab: 0,
      tabs: [
        { name: "Giriş Yap", icon: "mdi-account" },
        { name: "Hesap Oluştur", icon: "mdi-account-outline" },
      ],
      valid: true,
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },

      loginPassword: "",
      loginEmail: "",

      verify: "",
      loginEmailRules: [
        (v) => !!v || "Bu alan zorunludur.",
        (v) => /.+@.+\..+/.test(v) || "Geçerli bir e-mail giriniz.",
      ],
      emailRules: [
        (v) => !!v || "Bu alan zorunludur.",
        (v) => /.+@.+\..+/.test(v) || "Geçerli bir e-mail giriniz.",
      ],

      show1: false,
      rules: {
        required: (value) => !!value || "Bu alan zorunludur.",
        min: (v) => (v && v.length >= 8) || "Minimum 8 karakter",
      },
    };
  },
  methods: {
    registerSuccessfully() {
      this.registerDialog = false;
      window.location.reload();
    },
    validate() {
      if (this.$refs.loginForm.validate()) {
        this.$http
          .get(`/users?email=${this.loginEmail}&password=${this.loginPassword}`)
          .then((result) => {
            if (result?.data?.length > 0) {
              this.$store.commit("setUser", result?.data[0]);
              this.$store.commit("deletePassword");
              this.progressBar = true;
              setTimeout(() => {
                this.$router.push("/");
              }, 500);
            } else alert("Böyle kayıtlı bir kullanıcı bulunmamaktadır!");
          });
      }
    },
    registerValidate() {
      if (this.$refs.registerForm.validate()) {
        this.$http
          .post("/users", { ...this.userData })
          .then((this.registerDialog = true));
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed: {
    passwordMatch() {
      return () =>
        this.userData.password === this.verify || "Parolalar eşleşmiyor.";
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
</style>
