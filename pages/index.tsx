import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Loader from "../components/Loader"
import NavBar from "../components/NavBar"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "sreehari" },
        }}
      >
        Sreehari's Profile
      </Link>
      <Loader show={true} />
    </div>
  )
}
