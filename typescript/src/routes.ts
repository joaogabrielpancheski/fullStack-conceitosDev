import { Request, Response } from 'express';
import createUser from './services/CreateUserObject';

export function helloWorld (req: Request, res: Response) {
  const user = createUser({
    email: 'joao@gmail.com',
    password: '123456',
    techs: ['Node.js', 'ReactJS', 'React Native'],
    techsMixed: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 100 }
    ]
  });

  console.log(user.name);

  return res.json({ message: 'Hello World' });
};