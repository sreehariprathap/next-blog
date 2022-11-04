import "../styles/globals.css"
import type { AppProps } from "next/app"
import NavBar from "../components/NavBar"
import { Toaster } from "react-hot-toast"
import { UserContext } from "../lib/context"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../lib/firebase"
import { useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore"

export default function App({ Component, pageProps }: AppProps) {
  const [user] = useAuthState(auth)
  const [username, setUsername] = useState(null)
  useEffect(() => {
    let unsubscribe
    if (user) {
      const ref = doc(db, "users", user.uid)
      unsubscribe = onSnapshot(ref, (doc) => {
        setUsername(doc.data()?.username)
      })
    } else {
      setUsername(null)
    }
    return unsubscribe
  }, [user])

  return (
    <UserContext.Provider value={{ user, username }}>
      <NavBar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}
