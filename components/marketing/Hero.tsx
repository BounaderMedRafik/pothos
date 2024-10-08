import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="wrapper min-h-[40vh] flex items-center justify-center flex-col">
      <div className="text-4xl p-5 md:p-0 max-w-2xl text-center font-UNBOUNDED">
        POTHOS/UI: Built by the <span className="italic ">community</span>, for
        the <span className=" italic text-primary">community</span>.
      </div>
      <div className="mt-4 max-w-md text-center text-sm opacity-75">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        animi, sequi obcaecati molestias vel magnam?
      </div>
      <div className="flex items-center gap-1 mt-6">
        <Link
          href={"/docs"}
          className={buttonVariants({
            variant: "link",
            size: "sm",
          })}
        >
          <div className="flex items-center gap-2">
            <div>components</div>
            <div>
              <ArrowUpRight size={15} />
            </div>
          </div>
        </Link>
        <Button variant={"fore"} size={"sm"}>
          <div className="flex items-center gap-2">
            <div>Star on github</div>
            <div>
              <Github size={15} />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
