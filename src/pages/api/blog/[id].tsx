import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const postRequest = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  res.status(200).json(postRequest);
}
