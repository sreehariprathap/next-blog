import Link from "next/link"
import React from "react"
import Backbuttonbar from "../../components/Backbuttonbar"

const index = () => {
  return (
    <div className="flex">
      <Backbuttonbar />
      <div className="flex flex-col items-center p-5 w-full">
        <div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="text-4xl">Hi</h1>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="text-6xl">i'm</h1>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="text-8xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Sreehari
          </h1>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className="p-5">
          <h1>my links</h1>
          <div className="my-2">
            <a
              href="https://www.sreehari.tech"
              target="_blank"
              className="text-xl font-normal  hover:text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:underline ease-in duration-200"
            >
              Portfolio
            </a>
          </div>
          <div className="my-2">
            <a
              href="https://www.linkedin.com/in/sreehari-prathap/"
              target="_blank"
              className="text-xl font-normal  hover:text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:underline ease-in duration-200"
            >
              Linkedin
            </a>
          </div>
          <div className="my-2">
            <a
              href="https://github.com/sreehariprathap"
              target="_blank"
              className="text-xl font-normal  hover:text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:underline ease-in duration-200"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
