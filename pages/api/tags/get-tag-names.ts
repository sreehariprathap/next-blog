import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const tags = await prisma.tag.findMany({
    select: {
      name: true,
      id: true,
    },
  })
  const tagNames: any[] = []
  req.body.tags.forEach((tag: any) => {
    tags.forEach((item: any) => {
      if (item.id === tag) {
        tagNames.push(item.name)
      }
    })
  })
  res.send( tagNames )
}
