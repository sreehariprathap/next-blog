import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const feed = await prisma.post.findMany({
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
      name:true
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
  res.send( feed )
}
