import React from "react"
import {
  HeartIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid"
import style from "./PostSidebar.module.scss"
import axios from "axios"
import toast from "react-hot-toast"

const PostSidebar = (props: any) => {
  const like = (id: string) => {
    axios
      .patch("http://localhost:3000/api/posts/heart", { id: props.id })
      .then(() => {
        toast.success("post liked")
      })
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    like(props.id)
    props.likeFunction() // calling the method
  }
  console.log(props)

  return (
    <div className="sticky left-0 w-1/12  h-screen ">
      <div className="flex flex-col gap-7 p-5 mt-3">
        <div className="flex flex-col items-center">
          <HeartIcon
            className={` ${
              props.heartCount > 0 ? "text-pink-600" : "text-slate-300"
            }  w-8 h-8  hover:animate-pulse  hover:text-pink-600 ease-in duration-100`}
            onClick={handleSubmit}
          />
          <h2 className="font-medium mt-2 ">{props.heartCount}</h2>
        </div>
        {/* <div className="flex flex-col items-center">
          <ChatBubbleLeftIcon className={style.iconComment} />
          <h2 className="font-medium mt-2">{props.heartCount}</h2>
        </div> */}
        <div className="flex flex-col items-center">
          <BookmarkIcon
            className={`${
              props.isBookmarked ? "text-blue-600" : "text-slate-300"
            } w-8 h-8 hover:animate-pulse ease-in duration-100`}
          />
          {/* <h2 className="font-medium mt-2">52</h2> */}
        </div>
      </div>
    </div>
  )
}

export default PostSidebar
