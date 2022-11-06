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
  res.send(feed)
}
