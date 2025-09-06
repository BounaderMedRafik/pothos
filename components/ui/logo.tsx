import { cn } from "@/lib/utils";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        src={"/brand/logo-in-dark.svg"}
        className={cn("size-14 hidden dark:block", className)}
        alt="pothos/ui logo"
      />
      <img
        src={"/brand/logo-in-light.svg"}
        className={cn("size-14  dark:hidden", className)}
        alt="pothos/ui logo"
      />
    </>
  );
};

export default Logo;
