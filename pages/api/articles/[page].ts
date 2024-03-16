import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prismaClient/db"
import { ArticleTableProps } from "@/interfaces/types";

export default async function ArticlesPagination(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { page } = req.query;
  const ITEMS_PER_PAGE = 6;
  const pageNumber: number = Number(page) || 1;


  if (method == 'GET') {
    try {
      const [allBlogs, count] = await prisma.$transaction([
        prisma.articles.findMany({
          skip: (pageNumber - 1) * ITEMS_PER_PAGE,
          take: ITEMS_PER_PAGE,
          orderBy: [
            { id: 'desc' }
          ],
          include: {
            user: {
              include: {
                userSettings: {
                  select: {
                    avatar: true,
                    position: true,
                    url: true
                  }
                }
              }
            },
            category: {
              select: {
                name: true
              }
            }
          }
        }),
        prisma.articles.count()
      ]);

      const formattedBlogs = allBlogs.map((data: ArticleTableProps) => {
        return {
          category: data.category!.name,
          content: data.content,
          createdAt: data.createdAt,
          image: data.image,
          title: data.title,
          url: data.url,
        }
      })

      res.status(200).json({ result: formattedBlogs, perPage: ITEMS_PER_PAGE, page: Number(page), total: count });
    }
    catch (err) {
      console.log(err);
      res.status(404).json({ message: "Error", err })
    };
  }
  res.status(404).json('Not found')
}