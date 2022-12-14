import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const tags = await prisma.tag.create({
    data: {
      name: req.body.tag,
    },
  })
  res.send(tags)
}
