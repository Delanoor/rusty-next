"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { Toaster } from "@/components/ui/toaster";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {children}
    </NextThemesProvider>
  );
}
