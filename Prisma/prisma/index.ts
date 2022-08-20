import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany()

  console.log({ users })

  const bob = await prisma.user.findUnique({
    where: { email: "bob@example.com" },
    include: { posts: true }
  })

  console.log(bob)

  const posts = await prisma.post.findMany({
    where: {
      title: {
        startsWith: "title"
      }
    },
    take: 5,
    orderBy: {
      id: "desc"
    },
    include: {
      author: true
    }
  })

  console.log(posts)

  await prisma.user.update({
    where: { email: "alice@prisma.io" },
    data: { 
      id: 3
    }
  })

  const alice = await prisma.user.findUnique({
    where: { email: "alice@prisma.io"}
  })

  console.log({ alice })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
