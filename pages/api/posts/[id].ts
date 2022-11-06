import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  console.log(id)
  const feed = await prisma.post.findUnique({
    where: { id: String(id) },
  })
  res.send(feed)
}
