<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="4"
          md="6"
          sm="12"
          class="text-center justify-center mt-10 pt-16"
        >
          <div id="main" class="d-flex justify-center">
            <v-icon
              v-if="userData.profilePicture == ''"
              class="bg-color-gray"
              size="350"
              >mdi-account</v-icon
            >
            <img v-else :src="userData.profilePicture" alt="pp" class="pp" />
            <div class="pencil">
              <v-icon
                class="icon"
                v-show="isPencilActive == false"
                @click="isPencilActive = true"
                >mdi-pencil</v-icon
              >
            </div>
            <div class="remove">
              <v-icon
                class="icon"
                v-show="isPencilActive == false"
                @click="removePhoto"
                >mdi-close-thick
              </v-icon>
            </div>
          </div>
          <file-reader
            v-if="isPencilActive == true"
            :isPencilActive="isPencilActive"
            accept="image/*"
            output="data"
            @reader-load="changeTheProfile"
          />

          <br />
          <h1>{{ this.userName }}</h1>
          <v-snackbar v-model="snackbar" color="primary"
            >Değişikliklerinizi kaydetmeyi unutmayınız !
          </v-snackbar>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12" class="mt-10 pl-16 pr-16">
          <v-form
            ref="form"
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
              label="E-mail (değiştirilemez)"
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
            <v-btn type="submit" color="success" class="mr-4" @click="saveForm">
              Kaydet
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="12" lg="4" md="12" sm="12" class="mt-10 pl-16 pr-16">
			<PaymentInfo/>
		</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FileReader from "@/components/FileReader.vue";
import PaymentInfo from "@/components/MyProfile/PaymentInfo.vue";
export default {
  name: "myProfile",
  components: {
    FileReader,
	PaymentInfo
  },
  data() {
    return {
      isPencilActive: false,
      snackbar: false,
      added: false,
      choosenFile: this.$store.state.setProfile,
      user: {},
      userName:
        this.$store.state.user.firstName.charAt(0).toUpperCase() +
        this.$store.state.user.firstName.slice(1) +
        " " +
        this.$store.state.user.lastName.charAt(0).toUpperCase() +
        this.$store.state.user.lastName.slice(1),
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
      },
    };
  },
  mounted(){
    if(this.$store.state.user.profilePicture == ''){
      this.state.user.profilePicture = "";
    }
  },
  methods: {
    saveForm() {
      console.log(this.userData.id);
      this.$http
        .put(`/users/${this.userData.id}`, this.userData)
        .then((res) => {
          this.userData = res;
          // console.log("user:",this.$store.state.user)
        })
        .catch((err) => {
          console.log(err);
        });
      this.$store.commit("setUser", this.userData);
      window.location.reload();
    },

    changeTheProfile(item) {
      this.userData.profilePicture = item.data;
      this.$store.commit("setPic", item.data);
      this.$http.put(`/users/${this.userData.id}`, this.userData);

      function Base64ToImage(base64img, callback) {
        var img = new Image();
        img.onload = function () {
          callback(img);
        };
        img.src = base64img;
      }
      Base64ToImage(this.userData.profilePicture, function (img) {
        document.getElementById("main").removeChild(img);
        document.getElementById("main").appendChild(img);
      });
      this.snackbar = true;
    },
    removePhoto() {
      this.userData.profilePicture = "";
      this.$http.put(`/users/${this.userData.id}`, this.userData);
    },
  },
};
</script>

<style scoped>
.bg-color-gray {
  background-color: #e0e0e0;
  border-radius: 20px;
}
.editPhoto {
  position: absolute;
  top: 0;
  left: 470px;
}
.profile {
  border-radius: 25px;
}
.pp {
  width: 350px;
  border-radius: 20px;
}
.pencil {
  position: absolute;
  background-color: lightgray;
  margin-left: 300px;
  margin-top: 10px;
  border-radius: 5px;
}
.pencil:hover .icon {
  color: black;
  width: 30px;
  height: 30px;
}
.remove {
  position: absolute;
  background-color: lightgray;
  margin-right: 300px;
  margin-top: 10px;
  border-radius: 5px;
}
.remove:hover .icon {
  color: black;
  width: 30px;
  height: 30px;
}
</style>
