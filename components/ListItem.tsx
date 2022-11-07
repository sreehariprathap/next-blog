import Link from "next/link"
import React from "react"

const ListItem = (props: any) => {
  return (
    <div className="hover:bg-slate-100 px-3 py-1 ease-linear duration-150">
      <li>
        <Link href={props.link}>
          <h2 className="text-md font-semibold">{props.title}</h2>
          <h2>{props.category}</h2>
        </Link>
      </li>
    </div>
  )
}

export default ListItem
