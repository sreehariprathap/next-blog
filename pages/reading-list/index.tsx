import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Backbuttonbar from "../../components/Backbuttonbar"
import ReadingListItem from "../../components/ReadingListItem"

const index = () => {
  const [readingList, setReadingList] = useState([])
  const getBookMarks = (id: any) => {
    axios
      .post("http://localhost:3000/api/users/bookmarks/get", { id: id })
      .then((res: any) => {
        setReadingList(res.data)
      })
  }

  useEffect(() => {
    const id = localStorage.getItem("uid")
    getBookMarks(id)
  }, [])

  return (
    <>
      <div className="flex w-full">
        <Backbuttonbar />
        <div className="w-11/12 pb-3">
          <h1 className="text-4xl font-bold p-5">Reading List</h1>
          <ul className="flex flex-col gap-2">
            {readingList.length ? (
              readingList.map((item: any) => {
                return (
                  <li key={item.id}>
                    <Link href={`posts/${item.id}`}>
                      <ReadingListItem
                        title={item.title}
                        content={item.content}
                      />
                    </Link>
                  </li>
                )
              })
            ) : (
              <h2 className="text-center my-2 text-lg font-medium">
                No bookmarks to display
              </h2>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default index
