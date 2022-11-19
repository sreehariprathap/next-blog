import axios from "axios"
import React, { useEffect, useState } from "react"

const Tags = (props: any) => {
  const [tags, setTags] = useState(["react", "Angular"])
  useEffect(() => {
    const tags = props.tags
    axios
      .post(
        `${process.env.API_URL}api/tags/get-tag-names`, { tags })
      .then((res: any) => {
        setTags(res.data)
      })
  }, [])

  return (
    <>
      <div className="flex gap-3">
        {tags.length
          ? tags.map((tag) => {
              return (
                <div
                  className="bg-blue-500 text-white font-medium rounded-full  px-2 py-1"
                  key={tag}
                >
                  #{tag}
                </div>
              )
            })
          : null}
      </div>
    </>
  )
}

export default Tags
