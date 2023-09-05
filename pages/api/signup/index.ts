import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
  const PASSWORD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?^*!@#$%]).{3,24}$/;
  const EMAIL_REGEX: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  const USERNAME_REGEX: RegExp = /^[a-zA-Z0-9]{3,24}$/;

  
  const { username, email, password, name } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  if (!username) {
    return res.status(400).json({ message: 'Username is required.' });
  }

  const legalPassword = PASSWORD_REGEX.test(password);
  const legalEmail = EMAIL_REGEX.test(email);
  const legalUsername = USERNAME_REGEX.test(username);

  if (!legalPassword || !legalEmail || !legalUsername) {
    return res.status(403).json({ message: 'Illegal field' });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  
  if (existingUser) {
    return res.status(400).json({ message: 'Email is already in use.' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await prisma.user.create({ data: { username, email, password: hashedPassword, name } });

  res.status(201).json(user);
}
