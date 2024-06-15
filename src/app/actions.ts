"use server";

import type {
  CreateUserResponse,
  LoginUserSchema,
  RegisterUserSchema,
  Verify2FASchema,
} from "@/types/auth";
import axios, { type AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
axios.defaults.withCredentials = true;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function signOut() {
  try {
    const token = cookies().get("jwt")?.value;

    const response = await axios.post(
      `${API_URL}/logout`,
      {},
      {
        withCredentials: true,
        headers: {
          Cookie: `jwt=${token}; SameSite=Lax; Secure`,
        },
      }
    );

    if (response.status === 200) {
      cookies().delete("jwt");
      redirect("/login");
    }
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
    const response = await axios.post(`${API_URL}/verify-2fa`, body);
    // console.log("🚀 ~ verify2FA ~ response:", response);

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
