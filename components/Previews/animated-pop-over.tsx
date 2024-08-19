"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface AnimatedPopOverProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  trigger: string | React.ReactNode;
  close: string | React.ReactNode;
}

const AnimatedPopOver: React.FC<AnimatedPopOverProps> = ({
  children,
  title,
  trigger,
  close,
}) => {
  const [open, setOpen] = useState(false);
  const isIcon = typeof trigger == "object" ? true : false;

  return (
    <div className="relative size-96 flex items-center justify-center">
      {!open && (
        <AnimatePresence>
          <motion.div
            key="button"
            initial={{
              scale: 1.5,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            onClick={() => {
              setOpen(!open);
            }}
            className={cn(
              " px-4 py-1 w-fit rounded-lg bg-foreground text-background hover:bg-foreground/85 cursor-pointer",
              isIcon ? "px-4 py-4" : null
            )}
          >
            {trigger}
          </motion.div>
        </AnimatePresence>
      )}
      {open && (
        <AnimatePresence>
          <motion.div
            key="popover"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
            }}
            className="w-[400px] h-[200px] flex flex-col items-start justify-between p-5  bg-foreground text-background rounded-2xl absolute"
          >
            <div className="text-lg font-semibold">{title}</div>

            {children}
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              <div className="px-4 py-1 rounded-md bg-background text-foreground">
                <div>{close}</div>
              </div>
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default AnimatedPopOver;
