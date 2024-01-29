import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

type ResponseData = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const postsRequest = await prisma.post.findMany();
  res.status(200).json(postsRequest);
}
