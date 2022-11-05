import React, { useContext, useState } from "react"
import { UserContext } from "../lib/context"

const UserProfile = () => {
  const { user, username } = useContext(UserContext)
  const [userDp, setUserDp] = useState(
    "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
  )
  console.log(user)
  return <div>UserProfile</div>
}

export default UserProfile
