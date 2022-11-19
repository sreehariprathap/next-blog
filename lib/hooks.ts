import { doc, onSnapshot } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "./firebase"

const useUserData = () => {
  const [user] = useAuthState(auth)
  const [username, setUsername] = useState(null)
  const [useremail, setUseremail] = useState(null)
  const [userId, setUserId] = useState('')
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
        setUseremail(doc.data()?.email)
        setUserId( user.uid)
      })
    } else {
      setUsername(null)
    }
    return unsubscribe
  }, [user])
  

  return { user, username, userDp, useremail, userId }
}

export default useUserData
