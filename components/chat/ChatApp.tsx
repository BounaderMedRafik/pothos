"use client";
import { useChat } from "ai/react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MessagesProps } from "@/types/chatTypes";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import MyChatInput from "./MyChatInput";
import { ChatRequestOptions } from "ai";

const ChatApp = ({ sessionId }: { sessionId: string }) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } =
    useChat({
      api: "/api/chat-logic",
      body: { sessionId },
    });
  return (
    <div className=" relative min-h-full bg-background flex divide-y divide-foreground/25  flex-col justify-between gap-2">
      <div className=" flex-1 text-foreground bg-red-300  justify-between flex flex-col">
        <MessagesComp messages={messages} />
      </div>

      <div>
        <MyChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setInput={setInput}
        />
      </div>
    </div>
  );
};

const MessagesComp = ({ messages }: MessagesProps) => {
  return (
    <div className="flex bg-blue-200  max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((item, i) => (
          <div key={i}>
            <div>
              <SingleMessageComp
                content={item.content}
                isUserMessage={item.role === "user"}
              />
            </div>
          </div>
        ))
      ) : (
        <div>no messages</div>
      )}
    </div>
  );
};

const SingleMessageComp = ({
  content,
  isUserMessage,
}: {
  content: string;
  isUserMessage: boolean;
}) => {
  return (
    <div
      className={cn({
        "bg-blue-200 text-blue-900": !isUserMessage,
        "bg-red-200 text-red-900": isUserMessage,
      })}
    >
      <div className=" p-6 ">
        <div className=" max-w-3xl mx-auto flex  items-start gap-2.5">
          <div
            className={cn(
              " size-10 shrink-0 aspect-square rounded-full  border-red-500  bg-red-100  flex justify-center items-center",
              {
                "bg-blue-100 border-blue-500": !isUserMessage,
              }
            )}
          >
            {isUserMessage ? (
              <User className=" size-5" />
            ) : (
              <Bot className=" size-5" />
            )}
          </div>
          <div className=" flex flex-col ml-6 w-full">
            <div className=" flex items-center space-x-2">
              <span className="text-sm ">
                {isUserMessage ? "You" : "MYROBOTNIGGA"}
              </span>
            </div>
            <div className="text-xs py-2.5 font-normal">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
