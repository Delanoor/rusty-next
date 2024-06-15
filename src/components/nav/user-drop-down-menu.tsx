import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
// import { getServerAuthSession } from "@/server/auth";
import { UserIconMenu } from "./user-icon-menu";

export const UserDropDownMenu = async () => {
  //   const session = await getServerAuthSession();

  return (
    <div className="flex items-center py-2">
      {/* {session ? (
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
      )} */}
      <UserIconMenu />
    </div>
  );
};
