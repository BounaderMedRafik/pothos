"use client";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

const Code = ({ code }: { code: string }) => {
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
    <div className=" max-h-[550px] overflow-y-scroll relative">
      <div
        onClick={handleCopy}
        className="px-5 py-2 absolute top-5 right-5  cursor-pointer text-sm flex items-center gap-2 hover:bg-foreground/10 rounded-2xl"
      >
        <div>{copied ? "copied!" : "copy me"}</div>
        <div>{copied ? <Check size={13} /> : <Copy size={13} />}</div>
      </div>
      <code>
        <pre>{code}</pre>
      </code>
    </div>
  );
};

export default Code;
