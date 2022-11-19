import Link from "next/link"
import React from "react"

const ListItem = (props: any) => {
  return (
    <div className="hover:bg-slate-100 px-3 py-1 ease-linear duration-150">
      <li>
        <Link href={props.link}>
          <h2 className="text-md font-semibold truncate">{props.title}</h2>
          <p className="truncate max-w-[10rem]">{props.content}</p>
        </Link>
      </li>
    </div>
  )
}

export default ListItem
