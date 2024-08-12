"use client";
import React from "react";
import MyLogo from "../brand/MyLogo";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { Home, LogOut, User } from "lucide-react";
import { GiPaper } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const SideBar = () => {
  return (
    <div className=" w-1/5 bg-foreground/5 fixed top-0 left-0 min-h-screen flex flex-col justify-between">
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <LosLinkos />
        </div>
      </div>
      <div>
        <SideFooter />
      </div>
    </div>
  );
};

const links = [
  {
    label: "Home",
    url: "/",
    icon: <Home size={15} />,
  },
  {
    label: "Contractor",
    url: "/",
    icon: <GiPaper size={15} />,
  },
  {
    label: "Review Maker",
    url: "/",
    icon: <BsStars size={15} />,
  },
];

const NavBar = () => {
  return (
    <div className=" p-5  flex items-center justify-between">
      <div>
        <MyLogo className=" w-7" />
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

const LosLinkos = () => {
  return (
    <div className="p-5">
      <div>
        {links.map((item, i) => (
          <div key={i}>
            <Link
              href={item.url}
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
                className: "w-full px-0",
              })}
            >
              <div className="flex items-center justify-between w-full">
                <div>{item.label}</div>
                <div>{item.icon}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const SideFooter = () => {
  const user = useUser();
  return (
    <div className=" p-5 flex items-center justify-between">
      <div className="text-xs flex items-center gap-2 cursor-default">
        <div>
          <User size={13} />
        </div>
        <div className="mt-0.5">{user.user?.fullName}</div>
      </div>
      <div>
        <SignOutButton>
          <div
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "cursor-pointer",
            })}
          >
            <LogOut size={15} />
          </div>
        </SignOutButton>
      </div>
    </div>
  );
};

export default SideBar;
