import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("YRxYjLtG1UHhWO1MBM6K")
  .collection("carItems")
  .doc("bzghi4kTzaXODg50a1Ao");


firestore.doc('/users/YRxYjLtG1UHhWO1MBM6K/carItems/bzghi4kTzaXODg50a1Ao');