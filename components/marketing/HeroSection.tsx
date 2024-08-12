"use client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const HeroSection = () => {
  const user = useUser();
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <div className=" bg-primary text-xs text-background rounded-full py-1 w-fit px-5 mx-auto">
            <div className="flex items-center gap-2">
              <div>The one will handle your customers</div>
              <div>
                <ArrowRight size={12} />
              </div>
            </div>
          </div>
          <div className="text-5xl text-center font-semibold  font-Familjen">
            Your trusted partner for building lasting relationships and
            streamlined{" "}
            <span className=" text-primary font-Jomolhari">contracts.</span>
          </div>
          <p className="max-w-md mx-auto text-sm">
            Your steadfast ally in cultivating enduring partnerships while
            effortlessly managing the complexities of contract creation.
          </p>
          <div className=" flex items-center justify-center gap-1 ">
            {user.isSignedIn ? (
              <div>
                <Link
                  href="/dashboard"
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
            ) : (
              <div>
                <Button variant={"link"}>Learn More</Button>
                <Button>
                  <div className="flex items-center gap-2">
                    <div>Get Started</div>
                    <div>
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-14">
          placeholder should be changed
          <img
            src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
            className="w-full shadow-lg rounded-lg border"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
