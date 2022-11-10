import axios from "axios"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Error404 from "../../components/Error404"
import PostSidebar from "../../components/postsidebar/PostSidebar"
import Tags from "../api/tags"

const PostComponent = () => {
  const [post, setPost] = useState(null)
  const [author, setAuthor] = useState(null)
  const router = useRouter()
  const { slug } = router.query
  useEffect(() => {
    axios.get(`http://localhost:3000/api/posts/${slug}`).then((res: any) => {
      console.log(res.data)
      setPost(res.data.feed)
      setAuthor(res.data.user)
    })
  }, [])

  const getDate = (dateValue: string) => {
    const date = new Date(dateValue)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const returndate = [year, month, day].join("-")
    return returndate
  }

  if (post) {
    return (
      <div className="flex">
        <PostSidebar />
        <div className="w-11/12 px-4 ">
          <div className="bg-white card mt-4 w-full">
            {/* {post ? JSON.stringify(post) : "dude"} */}
            {post.imageUrl ? (
              <figure className="h-72 rounded-xl">
                <img src={post.imageUrl} className="w-full  object-contain" />
              </figure>
            ) : null}
            <div className="p-5">
              <div className="flex  gap-4 items-center my-4">
                <img src={author.imageUrl} className="w-14 rounded-full h-14" />
                <div className="">
                  <h2 className="text-lg font-medium">{author.name}</h2>
                  {/* <h2>{getDate(post.createdAt)}</h2> */}
                  <h2>Posted On {getDate(post.createdAt)}</h2>
                </div>
              </div>
              <div className="my-4">
                <h2 className="text-5xl font-bold mb-5">{post.title}</h2>
                {/* <Tags tags={post.tags} /> */}
                <p className="mt-2">
                  {post.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <Error404 />
}

export default PostComponent