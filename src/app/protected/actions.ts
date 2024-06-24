"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { API_URL } from "../constants";

export async function verifyUser() {
  const token = cookies().get("jwt")?.value;

  const body = JSON.stringify({ token });

  try {
    await axios
      .post(`${API_URL}/verify-token`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res;
      });
  } catch (err) {
    console.log("🚀 ~ verifyUser ~ err:", err);
    redirect("/login");
  }
}
