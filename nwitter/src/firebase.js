import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfD21dDFwNuXESGXXxTx3fs8tyywfuYk4",
  authDomain: "nwitter-2368b.firebaseapp.com",
  projectId: "nwitter-2368b",
  storageBucket: "nwitter-2368b.appspot.com",
  messagingSenderId: "889375137504",
  appId: "1:889375137504:web:84ceb533e9ac0c6b493a85"
};

export default firebase.initializeApp(firebaseConfig);