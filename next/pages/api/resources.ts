import axios, { AxiosError, AxiosResponse, AxiosStatic } from 'axios';
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
  activationTime?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const dataRes = await fetch(`${process.env.API_URL}/api/resources`);
    const data = await dataRes.json();
    return res.send(data);
  }

  if (req.method === 'POST' || req.method === 'PATCH') {
    const { id, title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority)
      res.status(422).send('دیتا کامل نیست');

    const url =
      req.method === 'POST'
        ? `${process.env.API_URL}/api/resources`
        : `${process.env.API_URL}/api/resources/${id}`;

    type method = 'post' | 'patch';

    try {
      const axiosRes = await axios[req.method.toLowerCase() as method](url, req.body);
      return res.send(axiosRes.data);
    } catch (err) {
      return res.status(422).send((err as AxiosError).response?.data);
    }
  }
}
