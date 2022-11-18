import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Backbuttonbar from "../../components/Backbuttonbar"

const index = () => {
  const [tags, setTags] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/api/tags").then((res: any) => {
      res.data.filter((tag: any) => tag.name != null)
      setTags(res.data)
    })
  }, [])
  const colorBands = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-cyan-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-emerald-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-fuchsia-500",
    "bg-rose-500",
    "bg-violet-500",
  ]
  const random = Math.floor(Math.random() * colorBands.length)
  console.log(colorBands[random])
  return (
    <div className="flex">
      <Backbuttonbar />
      <div className="px-3">
        <h1 className="text-4xl font-bold p-5">#Tags</h1>
        <div className="flex gap-5 flex-wrap w-full p-5 ">
          {tags.map((tag: any) => {
            return (
              <Link href={`tags/${tag.name}`}>
                <h1
                  className={`w-32 px-2 py-2 font-bold shadow-md text-white rounded-2xl bg-blue-500 text-center hover:scale-105 hover:shadow-lg ease-in duration-150`}
                >
                  #{tag.name}
                </h1>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default index
