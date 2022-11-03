import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import NavBar from "../components/NavBar"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Link
        prefetch={true}
        href={{
          pathname: "/[username]",
          query: { username: "sreehari" },
        }}
      >
        <a>Sreehari's Profile</a>
      </Link>
    </div>
  )
}
