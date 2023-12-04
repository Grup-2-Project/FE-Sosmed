import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Enter your email" })
    .email("Enter a valid email"),
  password: z
    .string()
    .min(7, { message: "Password minimal 7 character length" }),
});

export const registerSchema = z.object({
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
    ),
  repassword: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character",
    ),
  phone_number: z.string().regex(new RegExp("^[0-9]*$"), "Only numbers value").min(10, "Phone number must contain at least 10 characters"),
}).refine(data => data.password === data.repassword, {
  message: "Password don't match",
  path: ["repassword"]
});

export type ILoginType = z.infer<typeof loginSchema>;
export type IRegisterType = z.infer<typeof registerSchema>;
