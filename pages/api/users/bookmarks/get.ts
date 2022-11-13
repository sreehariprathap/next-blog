import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../util/prisma"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const bookmark = await prisma.bookmark.findmany({
    where:{
        authorId: req.body.id,
    }
  })
  res.send(bookmark)
}
