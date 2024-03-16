import { PrismaClient } from '@prisma/client'
import { achievementsSeed } from "../seeds/achievements"
import { categoriesSeed } from "../seeds/categories"
const prisma = new PrismaClient()

Promise.all([achievementsSeed(), categoriesSeed()])
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})