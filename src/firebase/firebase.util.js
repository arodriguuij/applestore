import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDIkOmL0J0I2mX5lcT_MfumUq6x0JlhGg8",
  authDomain: "applestoredb.firebaseapp.com",
  databaseURL: "https://applestoredb.firebaseio.com",
  projectId: "applestoredb",
  storageBucket: "applestoredb.appspot.com",
  messagingSenderId: "735941747012",
  appId: "1:735941747012:web:eed70b17d5a1c666477711",
  measurementId: "G-9B3F3MW5B6",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
