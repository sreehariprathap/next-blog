import { useRouter } from "next/router"
import React, { useContext, useEffect } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../lib/context"
import axios from "axios"
import { toast } from "react-hot-toast"
import styles from "./createpost.module.scss"
import makeAnimated from "react-select/animated"
import CreatableSelect from "react-select/creatable"

const create = () => {
  const { userId } = useContext(UserContext)
  const { register, handleSubmit } = useForm()
  const [coverImage, setCoverImage] = useState(false)
  const [Image, setImage] = useState("")
  const [formValue, setFormValue] = useState("")
  const [tagOptions, setTagOptions] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const router = useRouter()

  const animatedComponents = makeAnimated()

  // setting live image preview
  const handleOnchange = (e: any) => {
    const val = e.target.value.toLowerCase()
    if (val.length > 3) {
      setFormValue(val)
      setImage(val)
    }
  }

  // for getting the selected tags from select
  const handleChange = (e:any) => {
    // @ts-ignore
    setSelectedTags(Array.isArray(e) ? e.map((x) => x.value) : [])
  }

  // for getting the tags from db
  useEffect(() => {
    axios.get(
      `${process.env.API_URL}api/tags`).then((result) => {
      result.data.forEach((item: any) => {
        ;(item.value = item.id), (item.label = item.name)
      })
      setTagOptions(result.data)
    })
  }, [])

  //to toggle add image functionality
  const toggleCoverImageVisibility = () => {
    setCoverImage(!coverImage)
  }

  return (
    <>
      <div className="card  m-5 ">
        <h2 className="text-3xl mb-5 text-center"> Create a post</h2>
        {Image.length > 3 ? (
          <img src={Image} className="w-full h-44 object-cover rounded-md" />
        ) : null}
        <form className="flex  gap-5 flex-col shadow-sm p-5">
          <div>
            <input
              type="text"
              placeholder="Enter title"
              className={`${styles.title} input w-full`}
              {...register("title")}
            />
          </div>

          <div>
            <textarea
              className={`${styles.content} textarea w-full`}
              placeholder="Type Content here"
              {...register("content")}
            ></textarea>
          </div>

          <div>
            <CreatableSelect
              isClearable
              options={tagOptions}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              onChange={handleChange}
            />
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
                className={`${styles.content} input w-full`}
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
                data.tags = selectedTags
                axios
                  .post(
                    `${process.env.API_URL}api/posts/create`, data)
                  .then((response) => {
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
                data.imageUrl = formValue
                data.tags = selectedTags
                axios
                  .post(
                    `${process.env.API_URL}api/posts/create`, data)
                  .then((response) => {
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
