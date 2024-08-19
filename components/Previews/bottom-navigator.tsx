"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";

interface BottomNavigatorProps {
  items: {
    name: string;
    icon: React.ReactNode;
    description: {
      title: string;
      content: string | React.ReactNode;
    };
  }[];
  type?: "click" | "hover";
}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({ items, type }) => {
  const [tab, setTab] = useState("");
  const currentTab = items.filter((item) => item.name == tab);
  return (
    <div>
      {type == "click" ? (
        <div>
          <div className="relative">
            {currentTab.map((item, i) => (
              <AnimatePresence key={i}>
                <motion.div
                  key={tab}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -50,
                    opacity: 0,
                  }}
                  className="px-5 py-2 absolute  left-0 -top-32    bg-foreground mb-3 rounded-2xl   w-[450px] "
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                  >
                    <div
                      onClick={() => {
                        setTab("none");
                      }}
                      className="absolute z-20 rounded-md cursor-pointer right-4 top-4 hover:bg-background hover:text-foreground text-background p-1"
                    >
                      <X size={15} />
                    </div>
                    <motion.h4
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 5,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className="text-background"
                    >
                      {item.description.title}
                    </motion.h4>
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 5,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      className="text-background/75 text-xs"
                    >
                      {item.description.content}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {items.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setTab(item.name);
                }}
                className={cn(
                  "p-4 bg-foreground/50 hover:bg-foreground/75 cursor-pointer text-background rounded-2xl",
                  { "bg-foreground": item.name == tab }
                )}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="relative">
            {currentTab.map((item, i) => (
              <AnimatePresence key={i}>
                <motion.div
                  onHoverEnd={() => {
                    setTab("none");
                  }}
                  key={tab}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -50,
                    opacity: 0,
                  }}
                  className="px-5 py-2 absolute  left-0 -top-32    bg-foreground mb-3 rounded-2xl   w-[450px] "
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                  >
                    <div
                      onClick={() => {
                        setTab("none");
                      }}
                      className="absolute z-20 rounded-md cursor-pointer right-4 top-4 hover:bg-background hover:text-foreground text-background p-1"
                    >
                      <X size={15} />
                    </div>
                    <motion.h4
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 5,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className="text-background"
                    >
                      {item.description.title}
                    </motion.h4>
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 5,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      className="text-background/75 text-xs"
                    >
                      {item.description.content}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {items.map((item, i) => (
              <motion.div
                onHoverStart={() => {
                  setTab(item.name);
                }}
                key={i}
                className={cn(
                  "p-4 bg-foreground/50 hover:bg-foreground/75 cursor-pointer text-background rounded-2xl",
                  { "bg-foreground": item.name == tab }
                )}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default BottomNavigator;
