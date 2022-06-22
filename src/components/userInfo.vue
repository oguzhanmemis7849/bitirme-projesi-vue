<template>
  <div class="text-center">
    <v-menu offset-y>
      <template #activator="{ on: onMenu }">
        <v-tooltip bottom color="#ff0000">
          <template #activator="{ on: onTooltip }">
            <v-btn v-on="{ ...onMenu, ...onTooltip }" text large>
              <v-icon large>mdi-account</v-icon>
            </v-btn>
          </template>
          <span>{{ userName }}</span>
        </v-tooltip>
      </template>

      <v-list>
        <v-list-item>
          <strong>{{ userName }}</strong>
        </v-list-item>
        <v-list-item @click="myProfile">Profilim</v-list-item>
        <v-list-item @click="myCards">Kayıtlı Kartlarım</v-list-item>
        <v-list-item @click="logOut">
          <v-icon>mdi-logout</v-icon> Çıkış Yap
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
export default {
  name: "userInfo",
  data() {
    return {
      userName:
        this.$store.state.user.firstName.charAt(0).toUpperCase() +
        this.$store.state.user.firstName.slice(1) +
        " " +
        this.$store.state.user.lastName.charAt(0).toUpperCase() +
        this.$store.state.user.lastName.slice(1),
    };
  },
  methods: {
    async logOut() {
      try {
        await signOut(auth);
        this.$store.commit("logOutUser");
        this.$router.push("/login");
      } catch (e) {
        console.log(e);
      }
    },
    myProfile() {
      this.$router.push("/myProfile");
    },
    myCards() {
      this.$router.push("/myCards");
    },
  },
};
</script>

<style scoped></style>
