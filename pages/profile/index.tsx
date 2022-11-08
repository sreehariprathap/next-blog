import axios from "axios"
import { useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../lib/context"
import styles from "./porfile.module.scss"
import { PencilIcon } from "@heroicons/react/24/solid"
import { url } from "inspector"

const profile = () => {
  const { userId, userDp, username } = useContext(UserContext)
  const [picture, setPicture] = useState(
    "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
  )
  const [name, setName] = useState("")
  const [backGround, setBackGround] = useState(
    "https://img.freepik.com/premium-vector/big-set-abstract-hand-drawn-doodles-arrow-heart-cloud-sun-star-line-art_6997-3393.jpg?w=2000"
  )
  const [coverImageChange, setCoverImageChange] = useState(false)
  const [formValue, setFormValue] = useState("")

  const handleOnchange = (e: any) => {
    const val = e.target.value
    setFormValue(val)
  }

  var sectionStyle = {
    backgroundImage: `url("${backGround.toString()}")`,
  }

  const onSubmit = () => {
    const id = localStorage.getItem("uid")
    setBackGround(formValue)
    axios
      .patch("http://localhost:3000/api/users/change-cover", {
        id: id,
        backGroundImageUrl: backGround.toString(),
      })
      .then(() => {
        setCoverImageChange(false)
      })
  }

  useEffect(() => {
    const id = localStorage.getItem("uid")
    axios.get(`http://localhost:3000/api/users/${id}`).then((res: any) => {
      setName(res.data.name)
      setPicture(res.data.imageUrl)
      if (res.data.backGroundImageUrl) {
        setBackGround(res.data.backGroundImageUrl)
      }
    })
  }, [])

  return (
    <>
      <div
        className={` flex flex-col items-center justify-center m-5 rounded-md p-5 shadow-xl`}
        style={sectionStyle}
      >
        <img
          src={picture}
          alt="user image"
          className="rounded-full w-40 h-40 border-white border-2"
        />
        <div className="p-2 m-2 rounded-2xl bg-white shadow-xl">
          <h2 className=" text-3xl text-slate-900">{name}</h2>
          <h2 className=" text-xxl text-slate-700 text-center">@{username}</h2>
        </div>
      </div>
      <div className="flex justify-end m-2 p-2">
        {coverImageChange ? (
          <div className="flex gap-3 items-center">
            <form>
              <div className="flex gap-3 items-center">
                <input
                  type="text"
                  placeholder="Enter your username"
                  className={`input  w-full max-w-xs`}
                  onChange={handleOnchange}
                  value={formValue}
                />
              </div>
            </form>
            <div className="flex gap-3">
              <button className="btn btn-sm btn-success" onClick={onSubmit}>
                save
              </button>
              <button
                className="btn btn-sm btn-warning"
                onClick={() => {
                  setCoverImageChange(false)
                }}
              >
                cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            className="btn btn-sm"
            onClick={() => {
              setCoverImageChange(true)
            }}
          >
            <PencilIcon className="text-slate-50 w-5 h-5" />
          </button>
        )}
      </div>
    </>
  )
}

export default profile
