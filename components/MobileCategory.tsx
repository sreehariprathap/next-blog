import React, { useContext } from "react"
import { UserContext } from "../lib/context"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"
import styles from "../styles/sidebar.module.scss"

const MobileCategory = () => {
  const { username } = useContext(UserContext)

  return (
    <div className="dropdown dropdown-end xsm:block lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="w-10 rounded-full flex justify-center items-center">
          <Bars3Icon className="h-6 w-6 text-slate-800" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className={styles.option}>
          <Link href={"/"}>
            <div>
              <span>🏠 Home</span>
            </div>
          </Link>
        </li>
        <li className={styles.option}>
          <Link href={"/"}>
            <div>
              <span>📚 Reading List</span>
            </div>
          </Link>
        </li>
        <li className={styles.option}>
          <Link href={"/"}>
            <div>
              <span>📃 Listings</span>
            </div>
          </Link>
        </li>
        <li className={styles.option}>
          <Link href={"/"}>
            <div>
              <span>🏷️ Tags</span>
            </div>
          </Link>
        </li>
        <li className={styles.option}>
          <Link href={"/"}>
            <div>
              <span>💡 FAQ</span>
            </div>
          </Link>
        </li>

        <li className={styles.option}>
          <Link href={"about"}>
            <div>
              <span>🌈 About</span>
            </div>
          </Link>
        </li>
        <li className={styles.option}>
          <Link href={"contact"}>
            <div>
              <span>📞 Contact</span>
            </div>
          </Link>
        </li>
        <li className={styles.option}>
          <Link href={"/"}>
            <div>
              <span>🦮 Guides</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileCategory
