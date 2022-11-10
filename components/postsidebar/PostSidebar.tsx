import React from "react"
import {
  HeartIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid"
import style from "./PostSidebar.module.scss"

const PostSidebar = () => {
  return (
    <div className="sticky left-0 w-1/12  h-screen">
      <div className="flex flex-col gap-7 p-5 mt-3">
        <div className="flex flex-col items-center">
          <HeartIcon className={style.iconHeart} />
          <h2 className="font-medium mt-2">123</h2>
        </div>
        <div className="flex flex-col items-center">
          <ChatBubbleLeftIcon className={style.iconComment} />
          <h2 className="font-medium mt-2">23</h2>
        </div>
        <div className="flex flex-col items-center">
          <BookmarkIcon className={style.iconBookmark} />
          <h2 className="font-medium mt-2">52</h2>
        </div>
      </div>
    </div>
  )
}

export default PostSidebar
