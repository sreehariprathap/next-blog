import Link from "next/link"
import React from "react"
import styles from "../styles/sidebar.module.scss"

const Sidebar = (props: any) => {
  return (
    <div className="xsm:hidden lg:block sticky left-0 w-3/12  h-screen">
      <ul className="flex flex-col items-start pl-5 justify-center pt-10 gap-1">
        <li className={styles.option}>
          <Link href={"/"}>
            <div>
              <span>🏠 Home</span>
            </div>
          </Link>
        </li>
        <li className={styles.option}>
          <Link href={"reading-list"}>
            <div>
              <span>📚 Reading List <span className="mx-2 bg-slate-400 px-1 rounded-xl text-white">{props.bookmarksCount ? props.bookmarksCount : 0 }</span></span>
            </div>
          </Link>
        </li>
        {/* <li className={styles.option}>
          <Link href={"/"}>
            <div>
              <span>📃 Listings</span>
            </div>
          </Link>
        </li> */}
        <li className={styles.option}>
          <Link href={"tags"}>
            <div>
              <span>🏷️ Tags</span>
            </div>
          </Link>
        </li>
        <li className={styles.option}>
          <Link href={"faq"}>
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
        {/* <li className={styles.option}>
          <Link href={"/"}>
            <div>
              <span>🦮 Guides</span>
            </div>
          </Link>
        </li> */}
      </ul>
    </div>
  )
}

export default Sidebar
