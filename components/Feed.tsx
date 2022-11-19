import {
  BookmarkIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/solid"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import style from "../styles/feed.module.scss"
import Tags from "./Tags"

const Feed = (props: any) => {
  const readingTime = (content: string) => {
    const wpm = 225
    const words = content.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    return time
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    like(props.id)
    props.likeFunction() // calling the method
  }

  const truncateWithEllipsis = (content: string, maxLength: number) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "..."
    }
    return content
  }
  // function to get proper date format
  const getDate = (dateValue: string) => {
    const date = new Date(dateValue)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const returndate = [year, month, day].join("-")
    return returndate
  }

  const like = (id: string) => {
    axios
      .patch( `${process.env.API_URL}api/posts/heart`, { id: id })
      .then(() => {
        toast.success("post liked")
      })
  }

  const handleBookmark = (event: any) => {
    event?.preventDefault()
    const id = localStorage.getItem("uid")
    const postId = props.id
    axios
      .post(`${process.env.API_URL}api/users/bookmarks/toggle-bookmark`, {
        authorId: id,
        postId: postId,
      })
      .then((res: any) => {
        toast.success(res.data.message)
        props.bookmarkFunction()
      })
  }

  return (
    <div className="card shadow-sm rounded-md hover:border-blue-300 border-2 ease duration-200">
      {props.postImage ? (
        <figure className="h-72">
          <img src={props.postImage} className="w-full object-contain" />
        </figure>
      ) : null}
      <div className="p-5">
        <div className="flex">
          <div className="flex  gap-4 items-center">
            <img src={props.authorImage} className="w-14 rounded-full h-14" />
            <div className="">
              <h2 className="text-lg font-medium">{props.author}</h2>
              <h2>{getDate(props.date)}</h2>
            </div>
          </div>
        </div>
        <section className={style.content}>
          <div className="my-4">
            <h2 className="text-4xl font-bold mb-5">{props.title}</h2>
            <Tags tags={props.tags} />
            <p className="mt-2">{truncateWithEllipsis(props.content, 400)}</p>
          </div>
        </section>
      </div>
      <footer className="mt-5 flex justify-between p-3">
        <div className="flex gap-5 ">
          <div className="flex gap-3  hover:bg-slate-100 rounded-xl p-2 duration-200 ease">
            <HeartIcon
              className={`h-6 w-6  ${
                props.heartCount > 0 ? "text-pink-600" : "text-slate-300"
              } hover:animate-bounce ease `}
              onClick={handleSubmit}
            />
            {props.heartCount}{" "}
            <span className="xsm:hidden lg:block"> reactions</span>
          </div>
          {/* <div className="flex gap-3  hover:bg-slate-100 rounded-xl p-2 duration-200 ease">
            <ChatBubbleLeftIcon className="h-6 w-6 text-slate-300 hover:text-green-600 duration-200 ease" />
            {props.heartCount}
            <span className="xsm:hidden lg:block">comments</span>
          </div> */}
        </div>
        <div className="flex flex-row items-center gap-3">
          <p className="flex">
            {readingTime(props.content)} &nbsp; mins
            <span className="xsm:hidden lg:block">&nbsp; read</span>
          </p>
          <div
            className="flex gap-3   rounded-xl p-2 duration-200 ease"
            onClick={handleBookmark}
          >
            <BookmarkIcon
              className={`h-6 w-6  ${
                props.isBookmarked ? "text-blue-600" : "text-slate-300"
              } duration-200 ease`}
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Feed
