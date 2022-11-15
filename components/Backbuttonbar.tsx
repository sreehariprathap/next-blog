import React from "react"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Backbuttonbar = () => {
  return (
    <div className="flex justify-center py-5 px-4">
      <Link href={"/"}>
        <ArrowLeftCircleIcon className="w-10 h-10 text-slate-700 hover:scale-105 ease-in duration-150" />
      </Link>
    </div>
  )
}

export default Backbuttonbar
