import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAsn7XY5bilZd_xiSGg4SpcfjpALiCMz0Q",
  authDomain: "next-blog-app-2e34e.firebaseapp.com",
  projectId: "next-blog-app-2e34e",
  storageBucket: "next-blog-app-2e34e.appspot.com",
  messagingSenderId: "556821852078",
  appId: "1:556821852078:web:140e5fe4c01bacadd3e23f",
  measurementId: "G-CZS4TN3SKR",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export default app
