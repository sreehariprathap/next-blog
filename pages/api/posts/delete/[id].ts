import prisma from "../../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const feed = await prisma.post.delete({
    where: { id: String(id) },
  })
  res.send(feed)
}
