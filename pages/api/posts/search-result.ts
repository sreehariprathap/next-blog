import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.post.findMany({
    where: {
      authorId: {
        not: req.body.userId,
      },
    },
    select: {
      id: true,
      title: true,
    },
  })
  res.send(user)
}
