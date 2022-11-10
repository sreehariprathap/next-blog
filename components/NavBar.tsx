import Link from "next/link"
import React, { useContext, useEffect, useState } from "react"
import { BellIcon, PlusIcon } from "@heroicons/react/24/solid"
import { signOut } from "firebase/auth"
import { auth } from "../lib/firebase"
import { UserContext } from "../lib/context"
import router from "next/router"
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import axios from "axios"

const NavBar = () => {
  const { user, username, userDp } = useContext(UserContext)
  const item = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ]
  const [items, setItems] = useState(item)
  // note: the id field is mandatory
  useEffect(() => {
    axios.get("http://localhost:3000/api/posts").then((res: any) => {
      setItems(res.data)
    })
  }, [])

  const handleOnSearch = (string: any, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result: any) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item: any) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log("Focused")
  }

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    )
  }

  return (
    <nav className="flex justify-between items-center px-5 shadow-md bg-white">
      <div className="flex gap-5 justify-center items-center">
        <div className="my-2">
          <Link href={"/"}>
            <p className="rounded-md bg-slate-900 text-2xl text-slate-100 p-2 m-1">
              Blog
            </p>
          </Link>
        </div>
        <div className="xsm:hidden lg:flex">
          {/* <input
            type="text"
            placeholder="Search"
            className="input w-full max-w-xs"
          /> */}
          <div style={{ width: 400 }}>
            <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {/* user is signed in and has username  */}
        {user && (
          <>
            <div>
              <Link href={"/posts/create"}>
                <button className="xsm:hidden lg:btn btn-secondary  border-none text-black ">
                  Create Post
                </button>
              </Link>
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
