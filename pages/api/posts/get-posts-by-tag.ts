import prisma from "../../../util/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const feed = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
  const userData = await prisma.user.findMany({
    select: {
      id: true,
      imageUrl: true,
      name: true,
    },
  })
  const tags = await prisma.tag.findMany({
    select: {
      id: true,
      name: true,
    },
  })
  userData.forEach((user: any) => {
    feed.forEach((item: any) => {
      if (user.id === item.authorId) {
        item.authorImageUrl = user.imageUrl
        item.authorName = user.name
      }
    })
  })

  feed.forEach((item: any) => {
    item.tags.forEach((tagNumber: any) => {
      tags.forEach((tag: any) => {
        if (tagNumber === tag.id) {
          item.tags.push(tag.name)
        }
      })
    })
  })

  const filterdResults: any = []
  feed.filter((item: any) => {
    if (item.tags.includes(req.body.tag)) {
      filterdResults.push(item)
    }
  })

  res.send(filterdResults)
}
