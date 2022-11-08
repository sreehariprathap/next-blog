import Loader from "../components/Loader"
import Sidebar from "../components/Sidebar"
import SuggestionsBar from "../components/SuggestionsBar"
import PostFeedLayout from "../layouts/PostFeedLayout"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Loader show={false} />
      <div className="flex gap-4">
        <Sidebar />
        <div className="w-full">
          {/* <PostFeedLayout /> */}
        </div>
        <SuggestionsBar />
      </div>
    </div>
  )
}
