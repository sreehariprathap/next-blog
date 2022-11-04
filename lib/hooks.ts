import { doc, onSnapshot } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "./firebase"

const useUserData = () => {
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

  return { user, username }
}

export default useUserData
