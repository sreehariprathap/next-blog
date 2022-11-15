import React from "react"
import rainbowbg from "../../public/rainbowbg.png"
import Image from "next/image"
import Backbuttonbar from "../../components/Backbuttonbar"

const index = () => (
  <div className="flex">
    <div className="flex">
      <Backbuttonbar />
    </div>
    <div className="w-full">
      <div className="flex justify-center px-5 pt-5 rounded-md">
        {/* <Image src="../../public/rainbowbg.png" width={500} height={500} />
         */}
        <Image
          src={rainbowbg}
          className="rounded-lg shadow-md hover:shadow-2xl ease duration-200"
          alt="rainbow-bg"
          placeholder="blur"
          width={700}
          height={475}
        />
      </div>
      <div className="px-5 pt-6 flex justify-center items-center flex-col">
        <h2 className="text-5xl font-bold text-center">About Billblog</h2>
        <p className="pt-5">
          Billblog is a simple blogging app made using{" "}
          <span className="badge">Nextjs</span> as part of my learning path.
        </p>
        <h2>tech stack used is described below</h2>
        <ul className="flex flex-col gap-5 my-5">
          <li>
            <span className="bg-blue-500 px-2 py-1 rounded-full shadow-lg text-white font-medium">
              NextJS
            </span>{" "}
            - javascript framework & rest api
          </li>
          <li>
            <span className="bg-green-500 px-2 py-1 rounded-full shadow-lg text-white font-medium">
              Prisma
            </span>{" "}
            - object relational mapping
          </li>
          <li>
            <span className="bg-yellow-400 px-2 py-1 rounded-full shadow-lg text-white font-medium">
              PostgreSQL
            </span>{" "}
            - batabse
          </li>
          <li>
            <span className="bg-orange-400 px-2 py-1 rounded-full shadow-lg text-white font-medium">
              Firebase
            </span>{" "}
            - authentication
          </li>
          <li>
            <span className="bg-purple-400 px-2 py-1 rounded-full shadow-lg text-white font-medium">
              Tailwind
            </span>{" "}
            - styling
          </li>
          <li>
            <span className="bg-red-400 px-2 py-1 rounded-full shadow-lg text-white font-medium">
              Axios
            </span>{" "}
            - Http requests
          </li>
          <li>
            <span className="bg-pink-500 px-2 py-1 rounded-full shadow-lg text-white font-medium">
              {" "}
              React hook forms
            </span>{" "}
            - form submissions
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default index
