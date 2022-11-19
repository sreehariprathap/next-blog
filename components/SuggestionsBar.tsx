import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import styles from "../styles/suggestions-bar.module.scss"
import ListItem from "./ListItem"
import TagItem from "./TagItem"

const SuggestionsBar = () => {
  const [readingList, setReadingList] = useState([])
  const [topics, setTopics] = useState([])
  useEffect(() => {
    const id = localStorage.getItem("uid")
    getBookmarks(id ? id : "0")
    getTopics()
  }, [])

  const getBookmarks = (id: any) => {
    axios
      .post(
        `${process.env.API_URL}api/users/bookmarks/get`, { id: id })
      .then((res: any) => {
        setReadingList(res.data.slice(0, 4))
      })
  }

  const getTopics = () => {
    axios.get(
      `${process.env.API_URL}api/tags`).then((res: any) => {
      setTopics(res.data.slice(0, 4))
    })
  }

  return (
    <div className="xsm:hidden lg:block sticky left-0 w-3/12  h-screen my-3">
      <div className={`${styles.listings} mb-4 py-3`}>
        <div className="flex justify-between items-baseline p-3">
          <h2 className="text-xl font-bold">Listings</h2>
          <Link href={"/reading-list"}>
            <p>see all</p>
          </Link>
        </div>
        <ul className="my-3 flex flex-col gap-5">
          {readingList.length
            ? readingList.map((item: any) => {
                return (
                  <ListItem
                    title={item.title}
                    content={item.content}
                    link={`posts/${item.id}`}
                  />
                )
              })
            : null}
        </ul>
      </div>
      <div className={`${styles.listings} mb-4 py-3`}>
        <div className="flex justify-between items-baseline p-3">
          <h2 className="text-xl font-bold">Topics</h2>
          <Link href={"/tags"}>
            <p>see all</p>
          </Link>
        </div>
        <ul className="my-3 flex flex-col gap-5">
          {topics.length
            ? topics.map((item: any) => {
                return <TagItem title={item.name} link={`tags/${item.name}`} />
              })
            : null}
        </ul>
      </div>
      <div className="card discuss"></div>
    </div>
  )
}

export default SuggestionsBar
