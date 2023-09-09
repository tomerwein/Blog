import { PrismaClient, Prisma } from '@prisma/client'

/* 

to run the database type:
"npx prisma migrate dev --name init"

*/

const prisma = new PrismaClient()

const createNewPosts = (amount: number): (Prisma.PostCreateInput[]) => {
  let posts: Prisma.PostCreateInput[] = [];
  for (let i = 1; i < amount + 1; i++) {
    posts.push({
      title: "This is post " + i.toString(),
      content: "post number: " + i.toString() + " is cool ",
      published: true,
    })
  }
  return posts;
}

async function main() {
  console.log(`Start seeding ...`);
  let posts = createNewPosts(80);
  const user = await prisma.user.create({
    data: {
      id: 1,
      username: 'tomer',
      name: 'Tomer',
      email: 'tomer@gmail.com',
      posts: {
        create: posts
      }
    }
  })
  console.log(`Created user with id: ${user.id}`)

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })