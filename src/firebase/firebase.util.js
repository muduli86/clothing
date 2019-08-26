import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4O-rX_GIKICX_1dqV8SE0dY2Be37U26M",
  authDomain: "clothing-2b868.firebaseapp.com",
  databaseURL: "https://clothing-2b868.firebaseio.com",
  projectId: "clothing-2b868",
  storageBucket: "",
  messagingSenderId: "748894525502",
  appId: "1:748894525502:web:05289a650fae3300"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
