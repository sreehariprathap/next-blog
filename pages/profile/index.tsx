import axios from "axios"
import { useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../lib/context"

const profile = () => {
  const { userId, userDp, username } = useContext(UserContext)
  const [picture, setPicture] = useState(
    "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
  )
  const [name, setName] = useState("")

  useEffect(() => {
    const id = localStorage.getItem("uid")
    axios.get(`http://localhost:3000/api/users/${id}`).then((res: any) => {
      console.log(res.data)
      setName(res.data.name)
      setPicture(res.data.imageUrl)
    })
  }, [])

  return (
    <div className=" flex flex-col items-center justify-center m-5 bg-blue-700 rounded-md p-5">
      <img
        src={picture}
        alt="user image"
        className="rounded-full w-40 h-40 border-white border-2"
      />
      <div className="p-2 m-2 rounded-2xl bg-white">
        <h2 className=" text-3xl text-slate-900">{name}</h2>
        <h2 className=" text-xxl text-slate-700 text-center">@{username}</h2>
      </div>
    </div>
  )
}

export default profile
