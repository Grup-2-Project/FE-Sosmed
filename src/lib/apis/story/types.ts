import * as z from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const storySchema = z.object({
  article: z.string().optional().or(z.literal("")),
  picture: z
    .any()
    .refine((files) => files?.size <= 3000000, "Max image size is 3MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      "Only .jpg, .jpeg, and png formats are supported",
    )
    .optional()
    .or(z.literal("")),
});

export type IStoryType = z.infer<typeof storySchema>;
