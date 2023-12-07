import * as z from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const storySchema = z.object({
  artikel: z.string().optional().or(z.literal("")),
  gambar: z
    .any()
    .refine((file) => file?.length == 1, "File is required.")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported",
    )
    .refine((file) => file[0]?.size <= 3000000, `Max image size is 3MB`)
    .optional()
    .or(z.literal("")),
});

export interface IStory {
  id: number;
  artikel: string;
  gambar: string;
  username: string;
  likes: number;
  foto_profil: string;
  comments: IComments[];
  created_at: string;
}

export interface IComments {
  comment_id: number;
  komentar: string;
  post_id: number;
  username: string;
  foto_profil: string;
}

export type IStoryType = z.infer<typeof storySchema>;
