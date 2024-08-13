"use client";

import { ChatInputProps } from "@/types/chatTypes";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const MyChatInput = ({
  handleInputChange,
  handleSubmit,
  input,
  setInput,
}: ChatInputProps) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
              setInput("");
            }
          }}
          placeholder="do smthin"
        />
        <div>
          <Button type="submit">go for it</Button>
        </div>
      </form>
    </div>
  );
};

export default MyChatInput;
