import { cn } from "@/lib/utils";
import React from "react";

const MyLogo = ({
  withText,
  className,
}: {
  withText?: boolean;
  className?: string;
}) => {
  return (
    <div className="flex items-center gap-3 ">
      <img className={cn("w-10", className)} src="/brand/logo.png" alt="" />
      {withText ? (
        <div className="text-xl font-bold text-primary font-Familjen ">
          Pothos
        </div>
      ) : null}
    </div>
  );
};

export default MyLogo;
