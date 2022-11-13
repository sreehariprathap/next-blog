import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import Feed from "../components/Feed"
import Loader from "../components/Loader"
import Sidebar from "../components/Sidebar"
import SuggestionsBar from "../components/SuggestionsBar"
import styles from "../styles/Home.module.css"

export default function Home() {
  const [posts, setPosts] = useState([])

  const getPosts = (id: string) => {
    axios
      .post("http://localhost:3000/api/posts/feed", { userId: id })
      .then((res: any) => {
        setPosts(res.data)
      })
  }
  useEffect(() => {
    const id = localStorage.getItem("uid")
    getPosts(id ? id : "0")
  }, [])

  const likeEvent = () => {
    //Do something
    const id = localStorage.getItem("uid")
    axios
      .post("http://localhost:3000/api/posts/feed", { userId: id })
      .then((res: any) => {
        setPosts(res.data)
      })
  }

  const bookmarkEvent = () => {
    const id = localStorage.getItem("uid")
    axios
      .post("http://localhost:3000/api/posts/feed", { userId: id })
      .then((res: any) => {
        setPosts(res.data)
      })
  }

  return (
    <div className={`${styles.container} h-full`}>
      <Loader show={false} />
      <div className="flex gap-4">
        <Sidebar />
        <div className="w-full my-4 flex gap-4 flex-col">
          {/* <PostFeedLayout /> */}
          {posts ? (
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
        <SuggestionsBar />
      </div>
    </div>
  )
}
