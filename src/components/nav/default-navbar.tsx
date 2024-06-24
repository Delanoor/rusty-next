import Link from "next/link";

import ThemeToggle from "@/components/ui/theme-toggle";
import { UserDropDownMenu } from "./user-drop-down-menu";
import { Suspense } from "react";
// import { getServerAuthSession } from "@/server/auth";

export const HomeNavbar = async () => {
  //   const session = await getServerAuthSession();

  return (
    <header className="sticky left-0 top-0 z-50 flex h-16 w-full shrink-0 justify-center bg-back-layer-1 px-2 shadow-sm backdrop-blur-sm md:px-4">
      <div className="hidden h-full w-full max-w-7xl items-center md:inline-flex">
        <div className="drawer flex h-full shrink-0 items-center">
          <Link href="/" aria-label="Home" className="hidden md:block">
            <h1 className="text-2xl font-bold">RUSTYAUTH</h1>
          </Link>
        </div>

        <div className="flex w-full">
          <nav className="items-ceneter max-w-screen-3xl relative mx-auto flex h-full w-full flex-1 md:px-2">
            {/* <div className="flex w-full justify-center">
              {session?.user?.isAdmin && (
                <Link href={`${DASHBOARD_ADMIN_USER_ROUTE}`}>
                  <div className="flex h-full items-center px-2 py-1">
                    Admin
                  </div>
                </Link>
              )}

              {session?.user?.isMentor && (
                <Link href={`${DASHBOARD_MENTOR_STUDENTS_ROUTE}`}>
                  <div className="flex h-full items-center px-2 py-1">
                    Mentor
                  </div>
                </Link>
              )}

              {session?.user?.isStudent && (
                <Link href={`${DASHBOARD_STUDENT_ROUTE}`}>
                  <div className="flex h-full items-center px-2 py-1">
                    For Student
                  </div>
                </Link>
              )}
            </div> */}
            <div className="flex w-full justify-center">
              <Link href={`/protected`}>
                <div className="flex h-full items-center px-2 py-1">
                  Treasure
                </div>
              </Link>
            </div>

            <div className="flex justify-end whitespace-nowrap items-center space-x-2">
              <ThemeToggle />

              <UserDropDownMenu />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile View */}
      <div className="items-center` mx-auto inline-flex h-full w-full px-3 md:hidden">
        <div className="drawer flex h-full w-full items-center justify-between">
          <Link
            href="/"
            aria-label="Home"
            className="block h-8 w-24 text-2xl font-bold md:hidden"
          >
            RUSTY-AUTH
          </Link>
        </div>

        {/* <div className="justify-centerd flex w-full">
          {(session?.user?.isAdmin ?? session?.user?.isMentor) && (
            <Link href={`${DASHBOARD_ADMIN_USER_ROUTE}`}>
              <div className="flex h-full items-center px-2 py-1 text-sm">
                Dashboard
              </div>
            </Link>
          )}

          {session?.user?.isStudent && (
            <Link href={`${DASHBOARD_STUDENT_ROUTE}`}>
              <div className="flex h-full items-center px-2 py-1 text-sm">
                Student
              </div>
            </Link>
          )}
        </div> */}

        <div className="flex w-full justify-end">
          <div className="flex justify-end whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              {/* {!session?.user ? <UserIconSkeleton /> : <UserDropDownMenu />} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
