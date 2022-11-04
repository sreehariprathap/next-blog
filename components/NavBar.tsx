import Link from "next/link"
import React, { useContext } from "react"
import { BellIcon, PlusIcon } from "@heroicons/react/24/solid"
import { signOut } from "firebase/auth"
import { auth } from "../lib/firebase"
import { UserContext } from "../lib/context"

const NavBar = () => {
  const { user, username } = useContext(UserContext)
  console.log(user)
  console.log(username)
  return (
    <nav className="flex justify-between items-center px-5 shadow-md">
      <div className="flex gap-5 justify-center items-center">
        <div className="my-2">
          <Link href={"/"}>
            <p className="rounded-md bg-slate-900 text-2xl text-slate-100 p-2 m-1">
              Blog
            </p>
          </Link>
        </div>
        <div className="xsm:hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="input w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex gap-5">
        {/* user is signed in and has username  */}
        {user && (
          <>
            <div>
              <button className="xsm:hidden lg:btn bg-transparent border-none text-black hover:text-purple-700 hover:bg-purple-100">
                Create Post
              </button>
              <button className="btn bg-transparent border-none rounded-full text-black hover:text-purple-700 hover:bg-purple-100 lg:hidden">
                <PlusIcon className="h-6 w-6 text-black hover:text-purple-700 hover:bg-purple-100" />
              </button>
            </div>
            <div>
              <button className="btn bg-transparent border-none rounded-full text-black hover:text-purple-700 hover:bg-purple-100">
                <BellIcon className="h-6 w-6 text-black hover:text-purple-700 hover:bg-purple-100" />
              </button>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between h-16">
                    {username ? username : "no name"}
                  </a>
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
  return <a onClick={() => signOut(auth)}>sign out</a>
}

export default NavBar
