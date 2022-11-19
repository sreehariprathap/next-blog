import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const feed = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      authorId: {
        not: req.body.userId,
      },
    },
  })
  const userData = await prisma.user.findMany({
    select: {
      id: true,
      imageUrl: true,
      name: true,
    },
  })
  const bookmarks = await prisma.bookmark.findMany({
    where: {
      authorId: req.body.userId,
      postId: req.body.postId,
    },
  })
  userData.forEach((user: any) => {
    feed.forEach((item: any) => {
      if (user.id === item.authorId) {
        item.authorImageUrl = user.imageUrl
        item.authorName = user.name
      }
    })
  })

  feed.forEach((item: any) => {
    bookmarks.forEach((bookMark: any) => {
      if (item.id === bookMark.postId) {
        item.isBookmarked = true
      } else {
        item.isBookmarked = false
      }
    })
  })
  res.send(feed)
}
