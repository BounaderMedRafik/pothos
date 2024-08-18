"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Gallery = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    links: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  wrapper overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <Link key={idx} href={item.links} className="group">
            <motion.div className=" bg-foreground relative text-background flex items-center justify-center size-[200px] rounded-3xl overflow-hidden">
              <img src={item.image} className=" h-full w-full object-cover" />

              <div className=" absolute  opacity-0 group-hover:opacity-100 inset-0 w-full h-full bg-background/50 flex items-center justify-center">
                <Button variant={"fore"} size={"sm"}>
                  <div className="flex items-center gap-2">
                    <div> check now</div>
                    <div>
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </Button>
              </div>
            </motion.div>
          </Link>
        ))}
      </ul>
      <div className=" flex items-center justify-center mt-2">
        <Link href={"/docs"} className=" hover:opacity-75">
          <div className="flex items-center gap-2">
            <div className="text-sm">nagivate into components</div>
            <div>
              <ArrowRight size={15} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
