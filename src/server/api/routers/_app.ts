import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { prisma } from "~/server/db";
export const exampleRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  getAllPostsTRCP: publicProcedure.query(async () => {
    const postsRequest = await prisma.post.findMany();
    return postsRequest;
  }),
});
// export type definition of API
export type AppRouter = typeof exampleRouter;
