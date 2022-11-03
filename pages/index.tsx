import Link from "next/link"
import toast from "react-hot-toast"
import Loader from "../components/Loader"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Loader show={false} />
    </div>
  )
}
