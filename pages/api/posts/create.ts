import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

const postApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const post = await prisma.post.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      published: req.body.published,
      authorId: req.body.authorId,
      imageUrl: req.body.imageUrl
    },
  })
  res.send(post)
}

export default postApi
