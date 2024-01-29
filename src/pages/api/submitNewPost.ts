import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { z } from 'zod'

const schema = z.object({
    
  })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body;
    // const id = await createItem(data);

    console.log("data:", JSON.parse(data));
    // const id = await prisma.post.create({
    // });
    // res.status(200).json({ id });
  } catch (error) {
    console.log(error);
  }
}
