import ProtectedResource from "./_components/protected-resource";
import { verifyUser } from "./actions";

export default async function ProtectedPage() {
  await verifyUser();

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected and requires authentication to access.</p>

      <div>
        <ProtectedResource className="max-w-lg mx-auto" />
      </div>
    </div>
  );
}
