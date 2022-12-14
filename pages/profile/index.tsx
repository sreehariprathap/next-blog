import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../lib/context"
import { PencilIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import PostFeed from "../../components/PostFeed"
import Loader from "../../components/Loader"

const profile = () => {
  const { username } = useContext(UserContext)
  const [picture, setPicture] = useState(
    "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
  )
  const [loader, setLoader] = useState(false)
  const [name, setName] = useState("")
  const [backGround, setBackGround] = useState(
    "https://img.freepik.com/premium-vector/big-set-abstract-hand-drawn-doodles-arrow-heart-cloud-sun-star-line-art_6997-3393.jpg?w=2000"
  )
  const [coverImageChange, setCoverImageChange] = useState(false)
  const [formValue, setFormValue] = useState("")
  const [socials, setSocials] = useState(false)
  const [git, setGit] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [web, setWeb] = useState("")

  const [posts, setPosts] = useState([])

  const handleOnchange = (e: any) => {
    const val = e.target.value
    setFormValue(val)
  }

  var sectionStyle = {
    backgroundImage: `url("${backGround.toString()}")`,
  }

  const changeImage = () => {
    const id = localStorage.getItem("uid")
    setBackGround(formValue)
    axios
      .patch(
        `${process.env.API_URL}api/users/change-cover`, {
        id: id,
        backGroundImageUrl: backGround,
      })
      .then(() => {
        setCoverImageChange(false)
      })
  }

  useEffect(() => {
    setLoader(true)
    const id = localStorage.getItem("uid")
    axios.get(
      `${process.env.API_URL}api/users/${id}`).then((res: any) => {
      setName(res.data.name)
      setPicture(res.data.imageUrl)
      if (res.data.backGroundImageUrl) {
        setBackGround(res.data.backGroundImageUrl)
      }
      if (res.data.githubUrl) {
        setGit(res.data.githubUrl)
        setSocials(true)
      }
      if (res.data.linkedinUrl) {
        setLinkedin(res.data.linkedinUrl)
        setSocials(true)
      }
      if (res.data.websiteUrl) {
        setWeb(res.data.websiteUrl)
        setSocials(true)
      }
      setLoader(false)
    })
  }, [])

  useEffect(() => {
    setLoader(true)
    const id = localStorage.getItem("uid")
    axios
      .get(
        `${process.env.API_URL}api/users/posts/${id}`)
      .then((res: any) => {
        // res.data.forEach((post: any) => {
        //   post.createdAt = new Date(post.createdAt)
        // })
        setPosts(res.data)
        setLoader(false)
      })
  }, [])
  if (loader) {
    return <Loader show={loader} />
  }
  return (
    <>
      <div
        className={` flex flex-col items-center justify-center m-5 rounded-md p-5 shadow-xl`}
        style={sectionStyle}
      >
        {/* user profile  */}
        <div className="flex flex-col items-center">
          <img
            src={picture}
            alt="user image"
            className="rounded-full w-40 h-40 border-white border-2"
          />
          <div className="p-2 m-2 rounded-2xl bg-white shadow-xl">
            <h2 className=" text-3xl text-slate-900">{name}</h2>
            <h2 className=" text-xxl text-slate-700 text-center">
              @{username}
            </h2>
          </div>
        </div>
        {/* cover image  */}
        <div className="flex w-full justify-end m-2 p-2">
          {coverImageChange ? (
            <div className="flex gap-3 items-center">
              <form>
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    placeholder="Enter your image url"
                    className={`input  w-full max-w-xs`}
                    onChange={handleOnchange}
                    value={formValue}
                  />
                </div>
              </form>
              <div className="flex gap-3">
                <button
                  className="btn btn-sm btn-success"
                  onClick={changeImage}
                >
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
      </div>
      {/* social links  */}
      <div className="bg-white my-2 rounded-xl mx-5 p-3">
        <h2 className="text-center my-2 text-2xl font-medium">socials</h2>
        {socials ? (
          <div className="flex gap-4 justify-center">
            <a
              target="_blank"
              href={linkedin}
              className="p-5 shadow-md hover:shadow-xl ease-in duration-100"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                className="w-5 h-5"
              />
            </a>

            <a
              target="_blank"
              href={git}
              className="p-5 shadow-md hover:shadow-xl ease-in duration-100"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-5 h-5"
              />
            </a>

            <a
              target="_blank"
              href={web}
              className="p-5 shadow-md hover:shadow-xl ease-in duration-100"
            >
              <img
                src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png"
                className="w-5 h-5"
              />
            </a>
          </div>
        ) : (
          <AddSocialForm git={git} web={web} linkedin={linkedin} />
        )}
      </div>
      {/* post feeds  */}
      <div className=" my-2 rounded-xl mx-5">
        <h2 className="text-center my-2 text-2xl font-medium">Posts</h2>
        <div className="flex flex-col gap-4">
          {posts ? (
            posts.map((post: any) => {
              return (
                <>
                  <Link href={`posts/${post.id}`}>
                    <PostFeed
                      postImage={post.imageUrl}
                      title={post.title}
                      key={post.id}
                      content={post.content}
                      author={post.author}
                      heartCount={post.heartCount}
                      comments={post.comments}
                      id={post.id}
                      tags={post.tags}
                      date={post.createdAt}
                    />
                  </Link>
                </>
              )
            })
          ) : (
            <h2 className="text-center my-2 text-lg font-medium">
              No posts to display
            </h2>
          )}
        </div>
      </div>
    </>
  )
}
const AddSocialForm = (props: any) => {
  const [socialForm, setSocialForm] = useState(false)
  const { register, handleSubmit } = useForm()

  const addSocialUrl = (data: any) => {
    const id = localStorage.getItem("uid")
    data.id = id
    axios
      .patch(
        `${process.env.API_URL}api/users/add-social`, data)
      .then((res) => {
        toast.success("links added successfully")
        setSocialForm(false)
      })
  }
  if (socialForm) {
    return (
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit((data) => addSocialUrl(data))}
          className="flex gap-3 flex-col"
        >
          <div className="flex gap-5">
            <input
              {...register("git")}
              placeholder="github url"
              className={`input shadow-lg w-full max-w-xs`}
            />
            <input
              {...register("linkedin")}
              placeholder="linkedin url"
              className={`input shadow-lg w-full max-w-xs`}
            />
            <input
              {...register("web")}
              placeholder="website url"
              className={`input shadow-lg w-full max-w-xs`}
            />
          </div>
          <div className="flex justify-center gap-3">
            <button type="submit" className="btn btn-secondary btn-sm my-2">
              Save
            </button>
            <button
              className="btn btn-error btn-sm my-2"
              onClick={() => setSocialForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
  return (
    <div className="flex justify-center my-2">
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => setSocialForm(true)}
      >
        Add socials
      </button>
    </div>
  )
}

export default profile
