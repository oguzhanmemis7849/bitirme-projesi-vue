import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWSAgD4O4YCbnmc0ldMcCjFB-58M_864A",
  authDomain: "moogi-739fe.firebaseapp.com",
  projectId: "moogi-739fe",
  storageBucket: "moogi-739fe.appspot.com",
  messagingSenderId: "589971983419",
  appId: "1:589971983419:web:6656bf0a38fcae0ab9201e",
  measurementId: "G-V43Q0Y3EJC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
