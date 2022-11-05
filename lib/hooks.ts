import { doc, onSnapshot } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "./firebase"

const useUserData = () => {
  const [user] = useAuthState(auth)
  const [username, setUsername] = useState(null)
  const [userDp, setUserDp] = useState(
    "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
  )
  useEffect(() => {
    let unsubscribe
    if (user) {
      const ref = doc(db, "users", user.uid)
      unsubscribe = onSnapshot(ref, (doc) => {
        setUsername(doc.data()?.username)
        setUserDp(doc.data()?.photoURL)
      })
    } else {
      setUsername(null)
    }
    return unsubscribe
  }, [user])

  return { user, username, userDp }
}

export default useUserData
