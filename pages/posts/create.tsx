import { useRouter } from "next/router"
import React, { useContext } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../lib/context"
import axios from "axios"
import { toast } from "react-hot-toast"

const create = () => {
  const { user, username, userDp, userId } = useContext(UserContext)
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState("")
  const [coverImage, setCoverImage] = useState(false)
  const [Image, setImage] = useState("")
  const [formValue, setFormValue] = useState("")
  const router = useRouter()

  const handleOnchange = (e: any) => {
    const val = e.target.value.toLowerCase()
    if (val.length > 3) {
      setFormValue(val)
      setImage(val)
    }
  }

  const toggleCoverImageVisibility = () => {
    setCoverImage(!coverImage)
  }
  return (
    <>
      <div className="card m-5 ">
        <h2 className="text-3xl mb-5"> Create a post</h2>
        {Image.length > 3 ? (
          <img src={Image} className="w-full h-44 object-cover rounded-md" />
        ) : null}
        <form className="flex  gap-5 flex-col shadow-sm p-5">
          <div>
            <input
              type="text"
              placeholder="Enter title"
              className="input w-full "
              {...register("title")}
            />
          </div>

          <div>
            <textarea
              className="textarea w-full"
              placeholder="Type Content here"
              {...register("content")}
            ></textarea>
          </div>
          {!coverImage ? (
            <button
              className="btn btn-outline"
              onClick={toggleCoverImageVisibility}
            >
              Add cover image
            </button>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Enter image url"
                className="input w-full"
                {...register("imageUrl")}
                onChange={handleOnchange}
                value={formValue}
              />
            </div>
          )}
          <div className="flex justify-end gap-4">
            <button
              className="btn btn-outline"
              onClick={handleSubmit((data) => {
                data.published = false
                data.authorId = userId
                axios
                .post("http://localhost:3000/api/posts/create", data)
                .then((response) => {
                  console.log(response.data)
                  toast.success("saved as draft")
                  router.push("/")
                })
              })}
            >
              Save draft
            </button>
            <button
              className="btn btn-success"
              onClick={handleSubmit((data) => {
                data.published = true
                data.authorId = userId
                axios
                  .post("http://localhost:3000/api/posts/create", data)
                  .then((response) => {
                    console.log(response.data)
                    toast.success("posted successfully")
                    router.push("/")
                  })
              })}
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default create
