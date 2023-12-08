import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Enter your email" })
    .email("Enter a valid email"),
  password: z.string().min(1, { message: "Enter your password" }),
});

export const registerSchema = z
  .object({
    username: z.string().min(1, { message: "Enter your username " }),
    nama_depan: z.string().min(1, { message: "Enter your first name " }),
    nama_belakang: z.string().min(1, { message: "Enter your last name" }),
    gender: z.string().min(1, { message: "Pick your gender" }),
    email: z
      .string()
      .min(1, { message: "Enter your email" })
      .email("Enter a valid email"),
    password: z.string().min(7, { message: "Minimal 7 character length" }),
    repassword: z.string().min(7, { message: "Minimal 7 character length" }),
    hp: z
      .string()
      .regex(new RegExp("^[0-9]*$"), "Only numbers value")
      .min(10, "Phone number must contain at least 10 characters"),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Password don't match",
    path: ["repassword"],
  });

export type ILoginType = z.infer<typeof loginSchema>;
export type IRegisterType = z.infer<typeof registerSchema>;

export interface RegisterPayload {
  nama_depan: string;
  username: string;
}
export interface LoginPayload extends RegisterPayload {
  token: string;
}
