"use client";
import { NavItems, SocialItems } from "@/components/static-data/nav-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigatioBar = ({ banner }: { banner?: string }) => {
  const path = usePathname();
  return (
    <div className=" fixed z-50 w-full  ">
      {banner && (
        <div className=" bg-primary text-background  py-1 text-sm flex items-center justify-center">
          <span className=" opacity-75">{banner}</span>
        </div>
      )}

      <div className=" px-4 py-2 max-w-7xl mx-auto bg-background  w-full flex items-center justify-between ">
        <Link href={"/"}>
          <Logo className=" size-10" />
        </Link>
        <div className="flex items-center">
          <div className="flex items-center gap-0.5">
            {NavItems.map((item, i) => (
              <Link
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: path == item.href && "bg-muted",
                })}
                key={i}
                href={item.href}
              >
                <span className="flex items-center gap-1">
                  {item.title}
                  {item.isNew && (
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0.5 leading-none -mt-0.5"
                    >
                      New
                    </Badge>
                  )}
                </span>
              </Link>
            ))}
          </div>

          <div className="mx-3 w-px h-5 bg-muted" />

          <div className="flex items-center gap-0.5">
            {SocialItems.map((item, i) => (
              <a key={i} target="_blank" href={item.href}>
                <div className=" p-2 rounded-sm transition-all hover:bg-muted">
                  {item.icon}
                </div>
              </a>
            ))}
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

const DarkModeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div
        onClick={() => {
          setTheme("light");
        }}
        className=" p-2 rounded-sm transition-all hover:bg-muted hidden dark:block cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 3l0 18"></path>
          <path d="M12 9l4.65 -4.65"></path>
          <path d="M12 14.3l7.37 -7.37"></path>
          <path d="M12 19.6l8.85 -8.85"></path>
        </svg>
      </div>
      <div
        onClick={() => {
          setTheme("dark");
        }}
        className=" p-2 rounded-sm transition-all hover:bg-muted  dark:hidden cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 3l0 18"></path>
          <path d="M12 9l4.65 -4.65"></path>
          <path d="M12 14.3l7.37 -7.37"></path>
          <path d="M12 19.6l8.85 -8.85"></path>
        </svg>
      </div>
    </>
  );
};

export default NavigatioBar;
