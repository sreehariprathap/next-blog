import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../util/prisma"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userId: string = req.body.userId
  const postId: string = req.body.postId
  const bookmark = await prisma.bookmark.findFirst({
    where: {
      authorId: userId,
      postId: postId,
    },
  })
  if(bookmark){
    res.send(true)
  }else {
    res.send(false)
  }
}
