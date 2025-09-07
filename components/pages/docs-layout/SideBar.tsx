"use client";
import { SIDEBARITEMS } from "@/components/static-data/sidebar-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-10 hidden h-[calc(100dvh-4rem)] w-[200px] shrink-0 pt-20 md:block">
      <nav>
        <ul className="space-y-2">
          {SIDEBARITEMS.map((item) => (
            <li key={item.name}>
              <p className="mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {item.name}
              </p>
              <ul className="space-y-2">
                {item.children.map((child) => {
                  const isActive = pathname === child.href;
                  return (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={cn(
                          "block text-sm transition-colors hover:text-zinc-900 dark:hover:text-white",
                          isActive
                            ? "text-green-600 dark:text-green-400 font-medium"
                            : "text-zinc-600 dark:text-zinc-400"
                        )}
                      >
                        {child.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export const SideBarMobile = () => {
  const pathname = usePathname();

  return (
    <div className="block w-full pt-4 md:hidden">
      <select
        className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
        defaultValue={pathname}
        onChange={(e) => (window.location.href = e.target.value)}
      >
        {SIDEBARITEMS.map((item) => (
          <optgroup key={item.name} label={item.name}>
            {item.children.map((child) => (
              <option key={child.href} value={child.href}>
                {child.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

export default SideBar;
