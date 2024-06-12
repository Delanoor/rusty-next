import { cookies } from "next/headers";

export default async function ProtectedPage() {
  const token = cookies().get("jwt")?.value;
  const verifyData = await fetch("http://localhost:3000/verify-token", {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected and requires authentication to access.</p>
    </div>
  );
}
