import { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }


  const user = await prisma.user.findFirst({ where: { username } });

  if (!user || user.password == null || !bcrypt.compareSync(password, user.password)) {
    return res.status(404).json({ message: 'Invalid username or password.' });
  }

  const tokenPayload = { email: user.email, id: user.id };
  if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET');
  }

  const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);
  res.status(200).json({ token, user });
}
