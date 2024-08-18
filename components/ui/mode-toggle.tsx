"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div>
      <div className=" hidden dark:block">
        <Button
          variant={"ghost"}
          size={"iconSm"}
          onClick={() => setTheme("light")}
        >
          <Sun size={15} />
        </Button>
      </div>
      <div className="block dark:hidden">
        <Button
          variant={"ghost"}
          size={"iconSm"}
          onClick={() => setTheme("dark")}
        >
          <Moon size={15} />
        </Button>
      </div>
    </div>
  );
}
