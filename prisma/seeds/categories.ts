import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function categoriesSeed() {
    await prisma.categories.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: "Frontend"
        },
    })
}