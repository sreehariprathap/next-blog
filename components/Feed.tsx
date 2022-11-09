import {
  BookmarkIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/solid"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import style from "../styles/feed.module.scss"

const Feed = (props: any) => {
  const readingTime = (content: string) => {
    const wpm = 225
    const words = content.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    return time
  }

  const truncateWithEllipsis = (content: string, maxLength: number) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "..."
    }
    return content
  }

  const like = (id: string) => {
    axios
      .patch("http://localhost:3000/api/posts/heart", { id: id })
      .then(() => {
        toast.success("post liked")
      })
  }

  return (
    <div className="card shadow-sm rounded-sm">
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
              <h2>{props.date}</h2>
            </div>
          </div>
        </div>
        <section className={style.content}>
          <div className="my-4">
            <h2 className="text-4xl font-bold mb-5">{props.title}</h2>
            <p>{truncateWithEllipsis(props.content, 400)}</p>
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
              onClick={() => like(props.id)}
            />
            {props.heartCount} reactions
          </div>
          <div className="flex gap-3  hover:bg-slate-100 rounded-xl p-2 duration-200 ease">
            <ChatBubbleLeftIcon className="h-6 w-6 text-slate-300 hover:text-green-600 duration-200 ease" />
            {props.heartCount} comments
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p>{readingTime(props.content)} mins read</p>
          <div className="flex gap-3   rounded-xl p-2 duration-200 ease">
            <BookmarkIcon className="h-6 w-6 text-slate-300 hover:text-blue-600 duration-200 ease" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Feed
