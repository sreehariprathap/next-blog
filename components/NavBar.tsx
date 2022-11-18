import Link from "next/link"
import React, { useContext, useEffect, useState } from "react"
import { BellIcon, PlusIcon } from "@heroicons/react/24/solid"
import { signOut } from "firebase/auth"
import { auth } from "../lib/firebase"
import { UserContext } from "../lib/context"
import router, { useRouter } from "next/router"
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import axios from "axios"
import logoBlack from "../public/black-logo.png"
import Image from "next/image"
import MobileCategory from "./MobileCategory"

const NavBar = () => {
  const { user, username, userDp } = useContext(UserContext)
  const [items, setItems] = useState([])
  const router = useRouter()

  useEffect(() => {
    const userId = localStorage.getItem("uid")
    axios
      .post("http://localhost:3000/api/posts/search-result", {
        userId: userId,
      })
      .then((res: any) => {
        res.data.forEach((item: any) => {
          item.name = item.title
        })
        setItems(res.data)
      })
  }, [])

  const handleOnSearch = (string: any, results: any) => {
    // implement logic for search
  }

  const handleOnSelect = (items: any) => {
    // the item selected
    router.push(`posts/${items.id}`)
  }

  const formatResult = (items: any) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {items.name}
        </span>
      </>
    )
  }

  return (
    <nav className="flex justify-between items-center px-5 shadow-md bg-white w-full">
      <div className="flex gap-5 justify-center items-center">
        <div className="my-2">
          <Link href={"/"}>
            <Image src={logoBlack} width={125} height={75} />
            {/* <p className="rounded-md bg-slate-900 text-2xl text-slate-100 p-2 m-1">
              Blog
            </p> */}
          </Link>
        </div>
        <div className="xsm:hidden lg:flex">
          {router.pathname === "/" ? (
            <div style={{ width: 400 }} className="z-10">
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                formatResult={formatResult}
                // autoFocus
                placeholder={"search for posts..."}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex gap-5">
        {/* user is signed in and has username  */}
        {user && (
          <>
            <div>
              {router.pathname === "/" ? (
                <Link href={"/posts/create"}>
                  <button className="xsm:hidden lg:btn btn-secondary  border-none text-black ">
                    Create Post
                  </button>
                  <button className="btn bg-transparent border-none rounded-full text-black hover:text-purple-700 hover:bg-purple-100 lg:hidden">
                    <PlusIcon className="h-6 w-6 text-black hover:text-purple-700 hover:bg-purple-100" />
                  </button>
                </Link>
              ) : null}
            </div>
            <div>
              {/* <button className="btn bg-transparent border-none rounded-full text-black hover:text-purple-700 hover:bg-purple-100">
                <BellIcon className="h-6 w-6 text-black hover:text-purple-700 hover:bg-purple-100" />
              </button> */}
            </div>
            <MobileCategory />
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={userDp} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/profile"} className="justify-between h-16">
                    {username ? username : "no name"}
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <SignOutButton />
                </li>
              </ul>
            </div>
          </>
        )}
        {/* user is not signed in or has no username  */}
        {!user && (
          <>
            <div className="flex gap-2">
              <Link href={"/login"}>
                <button className="btn bg-transparent border-none text-black hover:text-purple-700 hover:bg-purple-100">
                  Login
                </button>
              </Link>
              {/* <Link href={"/login"}>
                <button className="btn">Create an account</button>
              </Link> */}
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
//sign out button
const SignOutButton = () => {
  return (
    <a
      onClick={() =>
        signOut(auth).then(() => {
          router.push("/")
          localStorage.clear()
        })
      }
    >
      sign out
    </a>
  )
}

export default NavBar
