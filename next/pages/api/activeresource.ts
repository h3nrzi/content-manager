import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function activeresource(req: NextApiRequest, res: NextApiResponse) {
  const axiosRes = await axios.get('http://localhost:3001/api/activeresource');
  const response = axiosRes.data;

  return res.json(response);
}
