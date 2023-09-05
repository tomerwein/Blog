import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken'; 

// PUT /api/publish/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;
  const cookies = parseCookies({req});
  const token = cookies.token;

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' })
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
  
  const post = await prisma.post.update({
    where: { id: Number(postId) },
    data: { published: true },
  });

  res.json(post);
}
