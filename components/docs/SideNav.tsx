import { docs } from "@/data/documents";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const SideNav = () => {
  const path = usePathname();
  const starter = docs.filter((item) => item.type == "starter");
  const components = docs.filter((item) => item.type == "component");
  const [open, setOpen] = useState(false);
  const lastIndex = path.lastIndexOf("/");
  const lastPathPart = lastIndex !== -1 ? path.substr(lastIndex + 1) : path;
  return (
    <div className="wrapper py-0  relative z-50">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex  cursor-pointer items-center gap-2 w-fit  bg-primary/25 px-4 py-0.5 text-sm rounded-lg"
      >
        <div>{lastPathPart}</div>
        <div>
          <ChevronDown size={15} />
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
            translateY: -20,
          }}
          animate={
            open
              ? { opacity: 1, translateY: 0 }
              : { opacity: 0, translateY: -20 }
          }
          style={{
            position: "absolute",
            top: 13, // adjust the top position to your liking
            left: 0,
          }}
        >
          {open ? (
            <div className=" absolute top-10 left-5 p-5 bg-background rounded-lg border border-foreground/25  w-96">
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: -20,
                }}
                animate={
                  open
                    ? { opacity: 1, translateY: 0 }
                    : { opacity: 0, translateY: -20 }
                }
                transition={{
                  delay: 0.3,
                }}
              >
                <h4>Getting Started</h4>
                <div>
                  {starter.map((item, i) => (
                    <div key={i}>
                      <Link
                        onClick={() => {
                          setOpen(false);
                        }}
                        href={item.link}
                      >
                        <div className="flex text-sm items-center justify-between hover:bg-primary/25 py-1 px-3 rounded-md">
                          <div>{item.name}</div>
                          <div>
                            <ArrowRight size={15} />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="w-full h-px bg-foreground/25 my-3" />
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: -20,
                }}
                animate={
                  open
                    ? { opacity: 1, translateY: 0 }
                    : { opacity: 0, translateY: -20 }
                }
                transition={{
                  delay: 0.5,
                }}
              >
                <h4>Components</h4>
                {components.map((item, i) => (
                  <div key={i}>
                    <Link
                      onClick={() => {
                        setOpen(false);
                      }}
                      href={item.link}
                    >
                      <div className="flex items-center text-sm justify-between hover:bg-primary/25 py-1 px-3 rounded-md">
                        <div>{item.name}</div>
                        <div>
                          <ArrowRight size={15} />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </motion.div>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SideNav;
