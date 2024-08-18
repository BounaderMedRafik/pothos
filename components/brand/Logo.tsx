import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="hover:opacity-75 transition-all">
      <div className=" flex items-center gap-2">
        <div className="font-UNBOUNDED font-black">POTHOS/UI</div>
        <div className="text-xs bg-primary w-fit px-3 py-0.5 rounded-full font-normal ">
          early-access
        </div>
      </div>
    </Link>
  );
};

export default Logo;
