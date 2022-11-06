import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

const postApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const userId = await prisma.user.findFirst({
    where: {
      id: {
        equals: req.body.id,
      },
    },
  })
  if (!userId) {
    const user = await prisma.user.create({
      data: {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        imageUrl: req.body.imageUrl,
      },
    })
    res.send("user created")
  }
  res.send("user already exists")
}

export default postApi
