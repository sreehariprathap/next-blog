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
  res.send({ feed, user })
}
