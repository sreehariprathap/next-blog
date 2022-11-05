import React from "react"
import PostFeed from "../components/PostFeed"

const PostFeedLayout = () => {
  return (
    <div className="flex flex-col w-full mt-3 gap-5">
      <PostFeed />
      <PostFeed />
      <PostFeed />
    </div>
  )
}

export default PostFeedLayout
