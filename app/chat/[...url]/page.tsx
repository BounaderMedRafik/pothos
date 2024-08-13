import ChatApp from "@/components/chat/ChatApp";
import { ReConstructTheURL } from "@/hooks/ReConstructTheURL";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { PageProps } from "@/types/pagesTypes";
import React from "react";

export default async function ChattingPage({ params }: PageProps) {
  const reconstructedURL = ReConstructTheURL({
    url: params.url as string[],
  });

  const isAlreadyThere = await redis.sismember("there-urls", reconstructedURL);

  const sessionId = "sessionlol";
  // console.log("is already there ? : ", isAlreadyThere);

  if (!isAlreadyThere) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedURL,
    });

    await redis.sadd("there-urls", reconstructedURL);
  }

  return <ChatApp sessionId={sessionId} />;
}
