import React from "react"
import Image from "next/image"
import image404 from "../public/9.png"
const Error404 = () => {
  return (
    <div className=" mt-5 w-full flex justify-center h-[80vh]">
      <div className="flex justify-center items-center items center p-4 flex-col ">
        <div className="flex flex-col">
          <h2 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 pt-5">
            OOPS!
          </h2>
          <h2 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 pb-5">
            Something went wrong
          </h2>
        </div>
        <Image src={image404} width={500} alt={"404 image"} />
      </div>
    </div>
  )
}

export default Error404
