import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const userUpdateSchema = z
  .object({
    nama_depan: z.string().min(1, { message: "Enter your first name " }),
    nama_belakang: z.string().min(1, { message: "Enter your last name" }),
    username: z.string().min(1, { message: "Enter your username" }),
    gender: z.string().min(1, { message: "Pick your gender" }),
    email: z
      .string()
      .min(1, { message: "Enter your email" })
      .email("Enter a valid email"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .optional()
      .or(z.literal("")),
    repassword: z
      .string()
      .min(6, { message: "Re-password must be at least 6 characters" })
      .optional()
      .or(z.literal("")),
    hp: z
      .string()
      .regex(new RegExp("^[0-9]*$"), "Only numbers value")
      .min(10, "Phone number must contain at least 10 characters"),
    foto_profil: z
      .any()
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        "Max image size is 5MB",
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png formats are supported",
      )
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Password don't match",
    path: ["repassword"],
  });

export type IUserUpdateType = z.infer<typeof userUpdateSchema>;

export interface Profile {
  username: string;
  nama_depan: string;
  nama_belakang: string;
  gender: string;
  hp: string;
  email: string;
  foto_profil?: string;
  created_at: string;
}
