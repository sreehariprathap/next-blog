import Loader from "../components/Loader"
import PostFeedLayout from "../layouts/PostFeedLayout"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Loader show={false} />
      <PostFeedLayout />
    </div>
  )
}
