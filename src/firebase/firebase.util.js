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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //Sign out
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
