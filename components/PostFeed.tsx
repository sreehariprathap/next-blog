import React from "react"
import Tags from "./Tags"
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid"

const PostFeed = () => {
  return (
    <>
      <div className="card shadow rounded-sm p-5 flex flex-row gap-5">
        <div className="w-10 w-3/12">
          <img
            className=" rounded-full"
            src="https://placeimg.com/80/80/people"
          />
        </div>
        <div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col">
              <h2 className="text-xl">Author</h2>
              <h2 className="text-md ">october - 30</h2>
            </div>
          </div>
          <div className="my-4">
            <h2 className="text-4xl font-bold mb-5">
              All you should know abput the new Next js version 13
            </h2>
            <Tags />
          </div>
          <div className="mt-2">
            <h2 className="text-md ">
              Next.js had its origins as a React framework for dynamic
              server-rendered sites. Instead of optimizing for single-page
              applications, we designed Next.js for teams building ambitious,
              complex applications. But being dynamic has always come with a lot
              of limits. You’ve wanted to be dynamic, but it’s meant at the
              expense of costly, always-on infrastructure, requiring manual
              provision and extensive operations. You’ve wanted to be dynamic,
              but it’s meant juggling two sets of runtime APIs, no JS in the
              server, and web standard APIs in the browser. You’ve wanted to be
              dynamic, but often only in a single region origin, depending on
              legacy, static, CDN caching to try to perform and scale. […]
              Today, we’re releasing Next.js 13 to enable you to be dynamic
              without limits.
            </h2>
          </div>
          <footer className="mt-5 flex justify-between">
            <div className="flex gap-5 ">
              <div className="flex gap-3  hover:bg-slate-100 rounded-xl p-2 duration-200 ease">
                <HeartIcon className="h-6 w-6 text-slate-300 hover:text-pink-600 duration-200 ease" />
                reactions
              </div>
              <div className="flex gap-3  hover:bg-slate-100 rounded-xl p-2 duration-200 ease">
                <ChatBubbleLeftIcon className="h-6 w-6 text-slate-300 hover:text-green-600 duration-200 ease" />
                comments
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p>3 mins read</p>
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
