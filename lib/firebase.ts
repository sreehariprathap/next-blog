import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAsn7XY5bilZd_xiSGg4SpcfjpALiCMz0Q",
  authDomain: "next-blog-app-2e34e.firebaseapp.com",
  projectId: "next-blog-app-2e34e",
  storageBucket: "next-blog-app-2e34e.appspot.com",
  messagingSenderId: "556821852078",
  appId: "1:556821852078:web:140e5fe4c01bacadd3e23f",
  measurementId: "G-CZS4TN3SKR",
}

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
