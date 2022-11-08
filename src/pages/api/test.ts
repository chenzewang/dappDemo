import { NextApiRequest, NextApiResponse } from 'next'
import UserModel from './models/user';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {


  const pets = await UserModel.find({})

  res.status(200).json({ name: pets })
}