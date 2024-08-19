"use client";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

const CodeBlock = ({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) => {
  //code , example
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            onClick={() => {
              setTab("preview");
            }}
            className={cn(
              "px-5 py-2  cursor-pointer border-b border-b-transparent",
              tab == "preview" ? "border-b-foreground" : null
            )}
          >
            preview
          </div>
          <div
            onClick={() => {
              setTab("code");
            }}
            className={cn(
              "px-5 py-2  cursor-pointer border-b border-b-transparent",
              tab == "code" ? "border-b-foreground" : null
            )}
          >
            Code
          </div>
        </div>
        {tab == "code" && (
          <div
            onClick={handleCopy}
            className="px-5 py-2  cursor-pointer text-sm flex items-center gap-2 hover:bg-foreground/10 rounded-2xl"
          >
            <div>{copied ? "copied!" : "copy me"}</div>
            <div>{copied ? <Check size={13} /> : <Copy size={13} />}</div>
          </div>
        )}
      </div>
      {tab == "preview" && (
        <div className=" w-full  h-96 rounded-lg border-foreground/50 mt-2 border  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] flex items-center justify-center">
          {children}
        </div>
      )}
      {tab == "code" && (
        <code className=" ">
          <pre className="border-foreground/50 mt-2 border p-5 rounded-lg max-h-[500px]">
            {code}
          </pre>
        </code>
      )}
    </div>
  );
};

export default CodeBlock;
