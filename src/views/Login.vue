<template>
  <div>
    <v-app>
      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <card :cardTitle="cardTitle" :cardText="cardText"></card>
        <!-- <v-img src="@/assets/Header/moogi-header-logo.png"></v-img> -->
        <div>
          <v-tabs
            v-model="tab"
            show-arrows
            background-color="#ff0000"
            icons-and-text
            dark
            grow
          >
            <v-tabs-slider color="purple darken-4"></v-tabs-slider>
            <v-tab v-for="(i, index) in tabs" :key="index">
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
                          v-model="userLoginData.loginEmail"
                          :rules="loginEmailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          outlined
                          color="green"
                          v-model="userLoginData.loginPassword"
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
                        <div id="product">
                          <img height="190" :src="array.src" class="ml-0" />
                        </div>
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
import DBJSON from "../db/db.json";
import Card from "../components/Home/Card.vue";
import CryptoJS from "crypto-js";
import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, addDoc, collection, setDoc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  components: { Card },
  data() {
    return {
      array: [],
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
      currentUser: "",
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        birthday: "",
        profilePicture: "",
        creditCard: [],
      },

      userLoginData: {
        loginPassword: "",
        loginEmail: "",
      },

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
  created() {
    // this.addToProductsFirebase();
  },
  methods: {
    addToProductsFirebase() {
      let array = [];
      for (var i in DBJSON) array.push([i, DBJSON[i]]);
      let products = array[0][1];
      console.log("src:", products[0].src);

      products.forEach((element) => {
        console.log(element);
        try {
          const docRef = addDoc(collection(db, "products"), element);
          console.log("docreffffff", docRef);
        } catch (e) {
          console.log(e);
        }
      });
    },
    registerSuccessfully() {
      this.registerDialog = false;
      window.location.reload();
    },
    async validate() {
      if (this.$refs.loginForm.validate()) {
        const password = CryptoJS.HmacSHA1(
          this.userLoginData.loginPassword,
          this.$store.getters._saltKey
        ).toString();
        this.userData.password = password;
        this.userData.email = this.userLoginData.loginEmail;
        console.log("şifreli:", this.userData.password);

        try {
          await signInWithEmailAndPassword(
            auth,
            this.userLoginData.loginEmail,
            this.userLoginData.loginPassword
          );
          await onAuthStateChanged(auth, (user) => {
            if (user) {
              this.currentUser = user.uid;
            }
          });
          const docRef = doc(db, "users", this.currentUser);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.$store.commit("setUser", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
          console.log("user:", this.$store.state.user);
          this.progressBar = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 500);
        } catch (error) {
          console.log(error);
        }

        // this.$http
        //   .get(`/users?email=${this.loginEmail}&password=${this.loginPassword}`)
        //   .then((result) => {
        //     if (result?.data?.length > 0) {
        //       this.$store.commit("setUser", result?.data[0]);
        //       this.progressBar = true;
        //       setTimeout(() => {
        //         this.$router.push("/");
        //       }, 500);
        //     } else alert("Böyle kayıtlı bir kullanıcı bulunmamaktadır!");
        //   });
      }
    },
    async registerValidate() {
      // const password = CryptoJS.HmacSHA1(this.userData.password , this.$store.getters._saltKey).toString();
      if (this.$refs.registerForm.validate()) {
        // this.userData.password = password

        try {
          await createUserWithEmailAndPassword(
            auth,
            this.userData.email,
            this.userData.password
          );
          console.log(this.userData);
        } catch (err) {
          console.log(err);
        }

        await onAuthStateChanged(auth, (user) => {
          if (user) {
            this.currentUser = user.uid;
          }
        });

        try {
          await setDoc(doc(db, "users", this.currentUser), this.userData);
        } catch (err) {
          console.log(err);
        }

        // try {
        //   const docRef = await addDoc(collection(db, "users"), this.userData);
        //   console.log(docRef);
        // } catch (e) {
        //   console.log(e);
        // }

        // this.$http
        //   .post("/users", { ...this.userData })
        //   .then((this.registerDialog = true));
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
