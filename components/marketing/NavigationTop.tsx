import { ArrowRight, Github, Twitter } from "lucide-react";
import Link from "next/link";
import Logo from "../brand/Logo";
import { buttonVariants } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

const NavigationTop = () => {
  return (
    <div className="wrapper flex items-center justify-between relative z-50 bg-background/90">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-1">
        <a
          href=""
          className={buttonVariants({
            variant: "ghost",
            size: "iconSm",
          })}
          target="_blank"
        >
          <Github size={15} />
        </a>
        <a
          href=""
          className={buttonVariants({
            variant: "ghost",
            size: "iconSm",
          })}
          target="_blank"
        >
          <Twitter size={15} />
        </a>
        <div>
          <ModeToggle />
        </div>
        <div className=" hidden md:block">
          <Link
            href={"/docs"}
            className={buttonVariants({
              variant: "secondary",
              size: "sm",
            })}
          >
            <div className="flex items-center gap-2">
              <div>Check Docs</div>
              <div>
                <ArrowRight size={15} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationTop;
