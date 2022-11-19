import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id: string = req.body.id
  const git: string = req.body.git
  const linkedin: string = req.body.linkedin
  const web: string = req.body.web

  const user = await prisma.user.update({
    where: { id: String(id) },
    data: {
      githubUrl: git.length ? git : null,
      linkedinUrl: linkedin.length ? linkedin : null,
      websiteUrl: web.length ? web : null,
    },
  })
  res.send(user)
}
