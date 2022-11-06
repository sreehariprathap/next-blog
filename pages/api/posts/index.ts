import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  res.send(feed)
}

const postApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const post = await prisma.post.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      published: req.body.published,
      authorId: req.body.author,
    },
  })
  res.send(post)
}
