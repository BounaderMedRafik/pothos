"use client";
import { docs } from "@/data/documents";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const path = usePathname();
  const starter = docs.filter((item) => item.type == "starter");
  const components = docs.filter((item) => item.type == "component");
  return (
    <div className="absolute top-0 left-0 w-[25%]  rounded-3xl p-4">
      <div className=" text-xl">Getting Started</div>
      <div className="flex  flex-col  mt-4">
        {starter.map((item, i) => (
          <Link
            className={cn(
              "p-2 px-5 opacity-75  font-semibold hover:opacity-100 text-sm border-l border-l-foreground/25",
              path == item.link
                ? " opacity-100 pl-8 border-l-foreground/75"
                : null
            )}
            href={item.link}
            key={i}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className=" text-xl mt-5">Components</div>
      <div className="flex  flex-col  mt-4">
        {docs.map((item, i) => (
          <Link
            className={cn(
              "p-2 px-5 opacity-75  font-semibold hover:opacity-100 text-sm border-l border-l-foreground/25",
              path == item.link
                ? " opacity-100 pl-8 border-l-foreground/75"
                : null
            )}
            href={item.link}
            key={i}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
