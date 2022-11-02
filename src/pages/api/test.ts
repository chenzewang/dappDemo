import { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req:NextApiRequest, res:NextApiResponse) {


  console.log("req",req);
  console.log("res",res);
  
  res.status(200).json({ name: 'Johaaaan Doe' })
}