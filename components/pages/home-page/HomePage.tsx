import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { ChevronRight, Github, GithubIcon, LucideGithub } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <main className=" h-[calc(100vh-1.5rem)] bg-muted m-3 rounded-md flex items-center justify-center   ">
        <div>
          <div className=" py-4 flex items-center justify-center ">
            <Logo className=" size-14 drop-shadow" />
          </div>

          <h1 className="text-4xl text-center font-serif max-w-lg mx-auto">
            UI kit & components for stunning, modern portfolios
          </h1>
          <p className="text-center mt-4 opacity-75 text-sm max-w-xs mx-auto">
            Built on top of{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy"
            >
              shadcn/ui
            </a>{" "}
            and Tailwind CSS — simple, flexible, and fully customizable.
          </p>

          <div className=" mx-auto mt-6 flex items-center justify-center gap-1.5">
            <Link href={"/docs"}>
              <Button size={"sm"}>
                <div className="flex items-center gap-2">
                  <p>Explore Docs</p>
                  <ChevronRight size={10} />
                </div>
              </Button>
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy"
              href={"https://github.com/BounaderMedRafik/pothos"}
            >
              <Button variant={"outline"} size={"sm"}>
                <div className="flex items-center gap-2">
                  <Github size={10} />
                  <p>Star on github</p>
                </div>
              </Button>
            </a>
          </div>
          <div className="mt-5 text-center text-xs opacity-50">
            Made with 💚 by{" "}
            <a
              href="https://bmed.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy"
            >
              BounaderMedRafik
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
