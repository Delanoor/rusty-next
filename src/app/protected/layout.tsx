import type { ReactNode } from "react";

export default function ProtectedPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="h-screen">{children}</div>;
}
