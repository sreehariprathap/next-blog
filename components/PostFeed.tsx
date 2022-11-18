import React, { useState } from "react"
import Tags from "./Tags"
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid"
import DeleteModal from "./DeleteModal"
import axios from "axios"

const PostFeed = (props: any) => {
  const readingTime = (content: string) => {
    const wpm = 225
    const words = content.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    return time
  }

  // function to get proper date format
  const getdate = (dateValue: string) => {
    const date = new Date(dateValue)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const returndate = [year, month, day].join("-")
    return returndate
  }

  const truncateWithEllipsis = (content: string, maxLength: number) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "..."
    }
    return content
  }


  return (
    <>
      <div className="card shadow rounded-xl p-3">
        {props.postImage ? (
          <figure className="h-72">
            <img src={props.postImage} className="w-full object-contain" />
          </figure>
        ) : null}
        <div>
          <div className="flex justify-between mt-3">
            <div className="flex flex-col">
              <h2 className="text-md ">{getdate(props.date)}</h2>
            </div>
            <div className="flex">
              {!props.author ? (
                <div>
                  <DeleteModal
                    id={props.id}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="my-4">
            <h2 className="text-4xl font-bold mb-5">{props.title}</h2>
            <div>
              <Tags tags={props.tags} />
            </div>
          </div>
          <div className="mt-2">
            <h2 className="text-md ">
              {truncateWithEllipsis(props.content, 400)}
            </h2>
          </div>
          <footer className="mt-5 flex justify-between">
            <div className="flex gap-5 ">
              <div className="flex gap-3  hover:bg-slate-100 rounded-xl p-2 duration-200 ease">
                <HeartIcon className="h-6 w-6 text-slate-300 hover:text-pink-600 duration-200 ease" />
                {props.heartCount}{" "}
                <span className="xsm:hidden lg:block">reactions</span>
              </div>
              {/* <div className="flex gap-3  hover:bg-slate-100 rounded-xl p-2 duration-200 ease">
                <ChatBubbleLeftIcon className="h-6 w-6 text-slate-300 hover:text-green-600 duration-200 ease" />
                {props.heartCount} <span className="xsm:hidden lg:block">comments</span> 
              </div> */}
            </div>
            <div className="flex items-center gap-3">
              <p>
                {readingTime(props.content)} mins
                <span className="xsm:hidden lg:block">read</span>{" "}
              </p>
              <div className="flex gap-3   rounded-xl p-2 duration-200 ease">
                <BookmarkIcon className="h-6 w-6 text-slate-300 hover:text-blue-600 duration-200 ease" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default PostFeed
