"use client";

// import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import placeholder from "@/images/user-placeholder.jpg";
// import { useCurrentUser } from "@/lib/hooks/use-current-user";
import { cn } from "@/lib/utils";
import { ChevronDown, LogOutIcon } from "lucide-react";
import { signOut } from "@/app/actions";

interface UserIconMenuProps {
  size?: "sm" | "md" | "lg";
}

export const UserIconMenu = ({ size }: UserIconMenuProps) => {
  //   const { user: currentUser } = useCurrentUser();
  const currentUser = {
    name: "John Doe",
    email: "",
  };
  const handleSignOut = async () => {
    // void signOut({ callbackUrl: "/" });
    await signOut();
  };
  return (
    <Popover>
      <PopoverTrigger className="flex w-full max-w-fit items-center justify-between focus:outline-none">
        <div className="flex w-full items-center space-x-2">
          <div className="flex items-center">
            <div
              className={cn(
                "relative aspect-1 h-7 w-7 overflow-hidden rounded-full focus:outline-none",
                {
                  "h-7 w-7": size === "sm",
                  "h-9 w-9": size === "md",
                  "h-12 w-12": size === "lg",
                }
              )}
            >
              (
              <Image
                alt="User Avatar"
                fill
                src={placeholder}
                style={{ objectFit: "cover" }}
                className="rounded-full"
                sizes="(min-width: 1040px) 753px, (min-width: 640px) 95.79vw, 753px"
              />
              )
            </div>
          </div>
          <div className="ml-2 cursor-pointer">
            <ChevronDown size={20} className="fill-neutral-500" />
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="end"
        alignOffset={5}
        className="rounded-box mb-4 w-56 border-foreground/20 p-2 shadow"
      >
        <div className="flex w-full flex-col justify-start items-start p-3">
          <div className="text-[0.75rem] font-semibold text-start">
            {currentUser?.name}
          </div>
          <div className="text-[0.7rem] font-light">{currentUser?.email}</div>
        </div>

        <div className="w-full border-y border-y-foreground/20 space-y-2 py-2 justify-start flex flex-col">
          <Link
            href="/settings"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className:
                "cursor-pointer rounded-lg transition hover:bg-back-layer-2",
            })}
          >
            <div className="text-sm inline-flex w-full justify-start">
              Settings
            </div>
          </Link>
        </div>
        <div className="mt-2">
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              size={"sm"}
              className="flex w-full cursor-pointer items-center justify-start space-x-2 rounded-lg transition"
              onClick={handleSignOut}
            >
              <LogOutIcon size={16} />
              <span className="text-sm">Log out</span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
