import { HomeNavbar } from "@/components/nav/default-navbar";
import type { ReactNode } from "react";

export default function ProtectedPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="h-screen">
      <HomeNavbar />
      <div className="p-14 max-w-screen-lg mx-auto">{children}</div>
    </div>
  );
}
