"use client";
import React from "react";
import MyLogo from "../brand/MyLogo";
import { Button, buttonVariants } from "../ui/button";
import { ChevronRight, Loader, LogIn } from "lucide-react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion";

const MarketingNav = () => {
  const user = useUser();
  return (
    <div className=" border-b border-b-foreground/10">
      <div className="wrapper p-4 flex items-center justify-between">
        <div>
          <MyLogo />
        </div>

        {user.isSignedIn ? (
          <div>
            {user.isLoaded ? (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
                className="flex  items-center gap-2"
              >
                <div>
                  <Link
                    href={"/dashboard"}
                    className={buttonVariants({
                      variant: "link",
                      size: "sm",
                    })}
                  >
                    <div className="flex items-center gap-2">
                      <div>dashboard</div>
                      <div>
                        <ChevronRight size={13} />
                      </div>
                    </div>
                  </Link>
                </div>
                <UserButton />
              </motion.div>
            ) : (
              <div className="flex items-center justify-center">
                <Loader size={13} />
              </div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex items-center gap-1"
          >
            <SignUpButton mode="modal">
              <Button variant={"secondary"}>Sign up</Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button>
                <div className="flex items-center gap-2">
                  <div>Log in</div>
                  <div>
                    <LogIn size={15} />
                  </div>
                </div>
              </Button>
            </SignInButton>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MarketingNav;
