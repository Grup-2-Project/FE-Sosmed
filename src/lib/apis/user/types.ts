import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const userUpdateSchema = z.object({
  first_name: z.string().min(1, { message: "Enter your first name " }),
  last_name: z.string().min(1, { message: "Enter your last name" }),
  gender: z.string().min(1, { message: "Pick your gender" }),
  email: z
    .string()
    .min(1, { message: "Enter your email" })
    .email("Enter a valid email"),
  password: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character",
    ).min(6, { message: "Password must be at least 6 characters" }),
  repassword: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character",
    )
    .min(6, { message: "Re-password must be at least 6 characters" }),
  phone_number: z.string().regex(new RegExp("^[0-9]*$"), "Only numbers value").min(10, "Phone number must contain at least 10 characters"),
  profile_picture: z
    .any()
    .refine((files) => !!files, {
      message: "Please upload a photo",
    })
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max image size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    ),
}).refine(data => data.password === data.repassword, {
  message: "Password don't match",
  path: ["repassword"]
});

export type IUserUpdateType = z.infer<typeof userUpdateSchema>;