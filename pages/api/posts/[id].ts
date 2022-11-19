import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const feed: any = await prisma.post.findUnique({
    where: { id: String(id) },
  })
  const uid = feed?.authorId
  let user: any = await prisma.user.findFirst({
    where: {
      id: {
        equals: uid,
      },
    },
    select: {
      imageUrl: true,
      name: true,
    },
  })
  if (feed) {
    const bookmarkedPost = await prisma.bookmark.findFirst({
      where: {
        postId: feed.id,
        authorId: feed.authorId,
      },
    })
    if (bookmarkedPost?.postId === feed.id) {
      feed.isBookmarked = true
    } else {
      feed.isBookmarked = false
    }
  }
  res.send({ feed, user })
}
