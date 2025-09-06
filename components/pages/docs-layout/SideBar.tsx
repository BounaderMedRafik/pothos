"use client";
import { SIDEBARITEMS } from "@/components/static-data/sidebar-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const SideBar = () => {
  const pathname = usePathname();
  const activeRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
      });
    }
  }, [pathname]);

  return (
    <aside className="sticky top-10 hidden h-[calc(100dvh-(--spacing(16)))] w-[220px] shrink-0 pt-8 md:block lg:pt-12">
      <ScrollArea className="h-full w-full">
        <nav>
          <ul
            role="list"
            className="h-full [&>li:not(:first-child)>div]:pt-6 pb-9"
          >
            {SIDEBARITEMS.map((item, index) => {
              return (
                <li key={`${item.name}-${index}`}>
                  {/* Group title with serif font */}
                  <div className="relative z-10 w-11/12 pb-4 text-sm/6   text-zinc-950 dark:text-white">
                    {item.name}
                  </div>
                  <ul role="list" className="space-y-3.5">
                    {item.children.map((child) => {
                      const isActive = pathname === child.href;

                      return (
                        <li key={child.href} ref={isActive ? activeRef : null}>
                          <Link
                            className={cn(
                              "relative flex items-center gap-2 pl-2 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                              isActive && "text-zinc-950 dark:text-white"
                            )}
                            href={child.href}
                          >
                            {/* Dot indicator */}
                            <span
                              className={cn(
                                "h-1.5 w-1.5 rounded-full transition-colors",
                                isActive
                                  ? "bg-zinc-950 dark:bg-white"
                                  : "bg-zinc-400 dark:bg-zinc-600"
                              )}
                            />
                            <span>{child.name}</span>

                            {/* Labels */}
                            {child?.isNew && (
                              <span className="ml-2 whitespace-nowrap rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-50">
                                New
                              </span>
                            )}
                            {child?.isUpdated && (
                              <span className="ml-2 whitespace-nowrap rounded-lg bg-amber-100 px-2 text-[10px] font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-50">
                                Updated
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </ScrollArea>
    </aside>
  );
};

export const SideBarMobile = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedHref, setSelectedHref] = React.useState(pathname);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const href = e.target.value;
    setSelectedHref(href);
    router.push(href);
  };

  return (
    <div className="block w-full pt-8 md:hidden">
      <select
        className="block w-full appearance-none rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
        value={selectedHref}
        onChange={handleChange}
      >
        {SIDEBARITEMS.map((item) => {
          return (
            <optgroup label={item.name} key={item.name}>
              {item.children.map((child) => (
                <option key={child.href} value={child.href}>
                  {child.name}
                </option>
              ))}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
};

export default SideBar;
