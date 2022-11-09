import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const post = await prisma.post.update({
    where: { id: req.body.id },
    data: {
      heartCount: { increment: 1 },
    },
  })
  res.send(post)
}
