import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id: string = req.body.id
  const bg: string = req.body.backGroundImageUrl
  const user = await prisma.user.update({
    where: { id: String(id) },
    data: {
      backGroundImageUrl: bg,
    },
  })
  res.send(user)
}
