import * as z from "zod";

export const commentSchema = z.object({
  post_id: z.number(),
  komentar: z.string().min(1, { message: "Please, enter your comment" }),
});

export type IComment = z.infer<typeof commentSchema>;
