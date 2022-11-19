import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Feed from "../../components/Feed"
import Loader from "../../components/Loader"

const PostsByTags = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState(false)
  const { slug } = router.query
  useEffect(() => {
    setLoader(true)
    axios
      .post(
        `${process.env.API_URL}api/posts/get-posts-by-tag`, {
        tag: slug,
      })
      .then((res: any) => {
        setPosts(res.data)
        setLoader(false)
      })
  }, [])

  const likeEvent = () => {
    //Do something
    const id = localStorage.getItem("uid")
    axios
      .post(
        `${process.env.API_URL}api/posts/feed`, { userId: id })
      .then((res: any) => {
        setPosts(res.data)
      })
  }

  const bookmarkEvent = () => {
    const id = localStorage.getItem("uid")
    axios
      .post(
        `${process.env.API_URL}api/posts/feed`, { userId: id })
      .then((res: any) => {
        setPosts(res.data)
      })
  }
  if (loader) {
    return <Loader show={loader} />
  }
  return (
    <div>
      <h1 className="text-4xl font-bold p-5">#{slug}</h1>
      <div className="px-4 py-2 flex flex-col gap-4">
        {posts.length ? (
          posts.map((post: any) => {
            return (
              <>
                <Link href={`posts/${post.id}`}>
                  <Feed
                    postImage={post.imageUrl}
                    title={post.title}
                    key="{post.id}"
                    content={post.content}
                    heartCount={post.heartCount}
                    comments={post.comments}
                    id={post.id}
                    date={post.createdAt}
                    authorImage={post.authorImageUrl}
                    tags={post.tags}
                    author={post.authorName}
                    likeFunction={likeEvent}
                    isBookmarked={post.isBookmarked}
                    bookmarkFunction={bookmarkEvent}
                  />
                </Link>
              </>
            )
          })
        ) : (
          <h2 className="text-center my-2 text-lg font-medium">
            No posts to display
          </h2>
        )}
      </div>
    </div>
  )
}

export default PostsByTags
