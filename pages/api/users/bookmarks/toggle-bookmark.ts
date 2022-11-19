import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../util/prisma"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userId: string = req.body.authorId
  const postId: string = req.body.postId
  const isBookmark = await prisma.bookmark.findFirst({
    where: {
      authorId: userId,
      postId: postId,
    },
  })
  if (isBookmark) {
    const bookmark = await prisma.bookmark.delete({
      where: {
        id: isBookmark.id,
      },
    })
    res.status(200).send({
      message: "Bookmark removed",
    })
  } else {
    const bookmark = await prisma.bookmark.create({
      data: {
        authorId: userId,
        postId: postId,
      },
    })
    res.status(200).send({
      message: "Bookmark added",
    })
  }
}
