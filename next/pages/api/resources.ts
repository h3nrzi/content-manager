import type { NextApiRequest, NextApiResponse } from 'next';

export interface Resourse {
  id?: string;
  title: string;
  description: string;
  link: string;
  image?: string;
  priority: number;
  timeToFinish: number;
  status?: string;
  createdAt?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources');
    const data = await dataRes.json();
    return res.send(data);
  }

  if (req.method === 'POST') {
    const { title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority)
      res.status(422).send('دیتا کامل نیست');

    return res.send('POST');
  }
}
