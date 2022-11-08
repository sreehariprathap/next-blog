import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const feed = await prisma.post.findMany({
    where: { authorId: String(id) },
  })
  res.send(feed)
}
