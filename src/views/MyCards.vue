<template>
  <div class="pa-16">
    <div class="d-flex justify-center pb-8">
      <div class="header">
        <h1 style="color: #ff0000">Kayıtlı Kartlarınız</h1>
      </div>
    </div>
    <v-row>
      <!-- kaç tane kart varsa döndüreceğiz -->
      <v-col
        lg="4"
        md="6"
        sm="12"
        v-for="(item, index) in getCardInfo.length"
        :key="index"
      >
        <!-- <v-col lg="4" md="6" sm="12"> -->
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="@/assets/card.jpg"
          >
            <div class="d-flex justify-center">
              <v-card-title>{{ getCardInfo[index].cardNumber }}</v-card-title>
            </div>

            <div class="d-flex justify-space-between pr-4 pl-4">
              <p>{{ getCardInfo[index].cardName }}</p>
              <v-spacer></v-spacer>
              <p>{{ getCardInfo[index].cardMonth }}/</p>
              <p>{{ getCardInfo[index].cardYear }}</p>
            </div>
          </v-img>

          <v-card-actions class="card-actions">
            <v-card-title class="pa-0">{{
              getCardInfo[index].nameOfTheCard
            }}</v-card-title>
            <v-btn color="#ff0000" text @click="deleteCard(index)">
              Kartı Sil
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { auth } from "@/firebase";
import { db } from "@/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
export default {
  name: "MyCards",
  computed: {
    ...mapGetters(["getCardInfo"]),
  },
  methods: {
    async deleteCard(index) {
      this.$store.commit("deleteCard", index);
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          this.currentUser = user.uid;
        }
      });
      console.log(this.currentUser);

      //users collection ın içine creditcards array pushlanması yapılacak

      const docRef = doc(db, "users", this.currentUser);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        // this.$store.commit("setUser", docSnap.data());

        // push json as an array
        // let credit = [];
        // let credits = [];
        let object = docSnap.data();
        // let objkeys = Object.keys(object);

        // objkeys.forEach((key) => {
        //   if (key == "creditCard") {
        //     if (object[key].length > 0) {
        //       object[key].map((indexx) => {
        // delete object["creditCard"][index];
        object["creditCard"].splice(index, 1);
        //       });
        //     }
        //   }
        // });
        console.log("obj:", object);
        await updateDoc(docRef, object);
      } else {
        console.log("No such document!");
      }
    },
  },
};
</script>

<style scoped>
.card-actions {
  background-color: rgb(204, 204, 204);
  display: flex;
  justify-content: space-between;
}

h1 {
  font-family: Libel;
  font-size: 45px;
}

.header {
  background-color: #e0e0e0;
  width: 750px;
  border: 5px solid red;
  border-radius: 25px;
  text-align: center;
}
</style>
