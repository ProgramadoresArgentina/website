import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prismaClient/db";
import { getSession } from "@auth0/nextjs-auth0";

export default async function getById(req: NextApiRequest, res: NextApiResponse) {
    const {method} = req
    const blogUrl = String(req.query.url) // url

    if(method === "GET"){
        try {

            await prisma.articles.update({
                where:{url: blogUrl},
                data:{
                    views: {
                        increment: 1
                    }
                }
            })

            const getBlog = await prisma.articles.findUnique({
                where:{
                    url: blogUrl,
                },
                include:{
                    hashtags: true,
                    user: {
                        select: {
                            username: true,
                            email: true,
                            userSettings: {
                              select: {
                                avatar: true
                              }
                            }
                        }
                    },
                    category: true
                }
            })

            if (getBlog) {
              const formattedBlogs = {
                category: getBlog.category!.name,
                content: getBlog.content,
                createdAt: getBlog.createdAt,
                updatedAt: getBlog.updatedAt,
                views: getBlog.views,
                image: getBlog.image,
                title: getBlog.title,
                url: getBlog.url,
                hashtags: getBlog.hashtags,
                username: getBlog.user.username,
                avatar: getBlog.user.userSettings!.avatar,
              }
              res.status(200).json(formattedBlogs)
            }
            res.status(200).json({})
            
        } catch (error) {
             console.error(error)
             res.status(404).json("RESOURCE_NOT_FOUND")    
        }
    } else {
        res.status(405).json("METHOD_NOT_ALLOWED")
    }

}