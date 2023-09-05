import { PrismaClient, Prisma } from '@prisma/client'

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

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'tomer',
    email: 'onetwothree@prisma.io',
    posts: {
      create: [
        {
          title: 'that is cool',
          content: 'https://www.prisma.io',
          published: true,
        },
      ],
    },
  },
  {
    name: 'amit',
    email: 'njwuaab@prisma.io',
    posts: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://www.twitter.com/prisma',
          published: true,
        },
      ],
    },
  },
  {
    name: 'jan',
    email: 'mahqdaaa@prisma.io',
    posts: {
      create: [
        {
          title: 'tell me what you think about Prisma',
          content: 'https://pris.ly/feedbackabc',
          published: true,
        },
        {
          title: 'I am a post title',
          content: 'https://pris.ly/youtube',
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`);
  let posts = createNewPosts(80);
  const user = await prisma.user.create({
    data: {
      id: 1,
      username: 'tomer',
      name: 'Tomer and Noga',
      email: 'noga@walla.com',
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