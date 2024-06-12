"use server";

import type {
  CreateUserResponse,
  LoginUserSchema,
  RegisterUserSchema,
  Verify2FASchema,
} from "@/types/auth";
import axios, { type AxiosError } from "axios";
import { cookies } from "next/headers";

export async function createUser(
  data: RegisterUserSchema
): Promise<CreateUserResponse> {
  try {
    const response = await axios.post("http://localhost:3000/signup", data);
    console.log("🚀 ~ createUser ~ response:", response);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<CreateUserResponse>;
      console.log("🚀 ~ createUser ~ axiosError:", axiosError.response?.data);
      return (
        axiosError.response?.data || { error: "An unknown error occurred" }
      );
    }
    throw err; // Rethrow any non-Axios errors
  }
}
export async function loginUser(
  data: LoginUserSchema
): Promise<CreateUserResponse> {
  try {
    const response = await axios.post("http://localhost:3000/login", data);

    if (response.data.loginAttemptId) {
      cookies().set("loginAttemptId", response.data.loginAttemptId);
    }

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<CreateUserResponse>;
      console.log("🚀 ~ axiosError:", err);

      return (
        axiosError.response?.data || { error: "An unknown error occurred" }
      );
    }
    throw err; // Rethrow any non-Axios errors
  }
}

export async function verify2FA(data: Verify2FASchema) {
  try {
    const loginAttemptId = cookies().get("loginAttemptId")?.value ?? "";
    const body = { ...data, loginAttemptId };
    const response = await axios.post("http://localhost:3000/verify-2fa", body);
    console.log("🚀 ~ verify2FA ~ response:", response);

    const setCookieHeader = response.headers["set-cookie"];
    if (setCookieHeader) {
      // Set the cookie server-side
      const cookieString = setCookieHeader[0];
      const cookieParts = cookieString.split(";")[0].split("=");
      cookies().set(cookieParts[0], cookieParts[1], {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });
    }

    return { status: response.status };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err;
      console.log("🚀 ~ axiosError:", err);

      return (
        axiosError.response?.data || { error: "An unknown error occurred" }
      );
    }
    throw err; // Rethrow any non-Axios errors
  }
}
