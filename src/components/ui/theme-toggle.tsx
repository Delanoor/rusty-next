"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { IconMoon, IconSun } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}
export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("aspect-1 rounded-full", className)}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {!theme ? null : theme === "dark" ? (
        <IconMoon className="transition-all" />
      ) : (
        <IconSun className="transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
