import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prismaClient/db"
import { ArticleTableProps } from "@/interfaces/types";

export default async function getHomeArticles(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  if (method == 'GET') {
    try {
      const getAllArticles = await prisma.articles.findMany({
        include: {
          _count: true,
          category: {
            select: {
              name: true
            }
          }
        },
        orderBy: {
          id: 'desc'
        },
        take: 3
      })

      const formattedBlogs = getAllArticles.map((data: any) => {
        return {
          category: data.category!.name,
          content: data.content,
          createdAt: data.createdAt,
          image: data.image,
          title: data.title,
          url: data.url,
        }
      })
      return res.json(formattedBlogs);
    } catch (error) {
      console.log(error)
      res.status(404).json([])
    }
  }
  res.status(404).json('Not found')
}