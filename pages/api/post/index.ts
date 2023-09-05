import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { Video } from '../../../mongo_util';
import jwt from 'jsonwebtoken'; 

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  
  const { title, content, token, email, videoUrl} = req.body;
  
  let decodedToken;
  
  if (token) {
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error('Missing JWT_SECRET');
      }
      
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: email } },
        url: videoUrl,
      },
    });
    
    const resultId = result.id;    

    if (videoUrl) {
      const videoUrlString = videoUrl.toString();

      const video = new Video({
        url: videoUrlString, user: email,
          id: resultId, date: new Date()})
      
      try {
      await video.save();
      } catch(e) {
      }   
    }

    else {
      const video = new Video({
        url: videoUrl, user: email,
          id: resultId, date: new Date()})
      try {
        await video.save();
        } catch(e) {
        }
    }

    res.json(result);

  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
  
}
