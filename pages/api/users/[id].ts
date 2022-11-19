import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const user = await prisma.user.findUnique({
    where: { id: String(id) },
  })
  res.send(user)
}
