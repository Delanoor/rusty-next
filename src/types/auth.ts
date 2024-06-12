import { z } from "zod";

export const registerUserSchema = z
  .object({
    email: z.string().min(3).email(),
    password: z.string().min(6),
    passwordConfirm: z.string().min(6),
    requires2FA: z.boolean(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords does not match",
  });

export const loginUserSchema = z.object({
  email: z.string().min(3).email(),
  password: z.string().min(6),
});
export const verify2FASchema = z.object({
  email: z.string().min(6).email(),
  "2FACode": z.string().min(6),
});

export type RegisterUserSchema = z.infer<typeof registerUserSchema>;
export type LoginUserSchema = z.infer<typeof loginUserSchema>;
export type Verify2FASchema = z.infer<typeof verify2FASchema>;

export interface CreateUserResponse {
  error?: string;
  message?: string;
}
