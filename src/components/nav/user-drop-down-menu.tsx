import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
// import { getServerAuthSession } from "@/server/auth";
import { UserIconMenu } from "./user-icon-menu";
import { getAuthState } from "@/app/actions";

export const UserDropDownMenu = async () => {
  const { isAuthenticated } = await getAuthState();

  return (
    <div className="flex items-center py-2">
      {isAuthenticated ? (
        <UserIconMenu />
      ) : (
        <>
          <Link
            href="/login"
            className={buttonVariants({ variant: "default" })}
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
};
