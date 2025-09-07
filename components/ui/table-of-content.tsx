"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Heading = {
  id: string;
  text: string;
  level: number;
  link: string;
};

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, h4")
    ) as HTMLElement[];

    const newHeadings = elements
      .map((elem) => {
        const level = parseInt(elem.tagName.replace("H", ""), 10);
        if (level === 1) return null;

        if (!elem.id) {
          elem.id =
            elem.textContent
              ?.toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]/g, "") ?? "";
        }

        return {
          id: elem.id,
          link: elem.id,
          text: elem.textContent ?? "",
          level,
        };
      })
      .filter((heading): heading is Heading => heading !== null);

    setHeadings(newHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" } // trigger when heading is ~30% from top
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <nav className="text-sm text-zinc-700 dark:text-zinc-400">
      <p className="mb-2 font-medium text-zinc-900 dark:text-zinc-100">
        On this page
      </p>
      <ul className="space-y-1">
        {headings.map((heading, i) => (
          <li
            key={`${heading.id}-${heading.level}-${pathname}` + i}
            className={cn(
              heading.level === 2 && "pl-0",
              heading.level === 3 && "pl-3 text-[13px]",
              heading.level === 4 && "pl-6 text-[12px] opacity-80"
            )}
          >
            <a
              href={`#${heading.link}`}
              className={cn(
                "transition-colors hover:underline",
                activeId === heading.id
                  ? "text-green-600 dark:text-green-400 font-medium"
                  : "hover:text-zinc-900 dark:hover:text-white"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
