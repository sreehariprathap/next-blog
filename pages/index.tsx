import Link from "next/link"
import toast from "react-hot-toast"
import Loader from "../components/Loader"
import prisma from "../util/prisma"
import PostFeedLayout from "../layouts/PostFeedLayout"
import styles from "../styles/Home.module.css"
import { GetStaticProps } from "next"

export default function Home() {
  return (
    <div className={styles.container}>
      <Loader show={false} />
      <PostFeedLayout />
    </div>
  )
}
// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  console.log(feed)
  return {
    props: { feed },
    revalidate: 10,
  }
}

// type Props = {
//   feed: PostProps[]
// }
