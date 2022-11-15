import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../util/prisma"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const bookmarks = await prisma.bookmark.findMany({
    where: {
      authorId: {
        equals: req.body.id,
      },
    },
  })
  let bookmarkPost: any[] = []
  const posts = await prisma.post.findMany({})
  posts.forEach((item: any) => {
    bookmarks.forEach((bookmark: any) => {
      if (item.id === bookmark.postId) {
        bookmarkPost.push(item)
      }
    })
  })
  res.send(bookmarkPost)
}
