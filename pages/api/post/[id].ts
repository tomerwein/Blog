import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken'; 
import { setup, csrf } from "../../../lib/csrf";


export const getServerSideProps = setup(async (
  req: NextApiRequest, res: NextApiResponse) => {
  return {
    props: {},
  };
 });

const postsPerPage = 10;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const postId = req.query.id;
  const cookies = parseCookies({req});
  const token = cookies.token;

  if (req.method === "GET") {
    const page = parseInt(req.query.page as string) || 1;

    if (isNaN(page) || page < 1) {
      res.status(400).json({ error: "Invalid page number" });
      return;
    }

    const feed = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
      skip: (page - 1) * postsPerPage,
      take: postsPerPage,
    });

    res.status(200).json({ posts: feed });
  } else if (req.method === "DELETE") {
    if (!token) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    let decodedToken;
    
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error('Missing JWT_SECRET');
      }
      
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    
    const user = decodedToken; 

    const post = await prisma.post.delete({
      where: { id: Number(postId) },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handler;
