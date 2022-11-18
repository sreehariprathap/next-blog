import React from "react"

const ReadingListItem = (props: any) => {
  return (
    <div className="p-5 flex flex-col justify-between w-auto shadow-sm rounded-md hover:border-blue-300 border-2 ease duration-200">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p className="truncate">{props.content}</p>
    </div>
  )
}

export default ReadingListItem
