import { type Message } from "ai/react";
import { type useChat } from "ai/react";

export interface MessagesProps {
  messages: Message[];
}
export interface ChatInputProps {
  input: string;
  handleInputChange: ReturnType<typeof useChat>["handleInputChange"];
  handleSubmit: ReturnType<typeof useChat>["handleSubmit"];
  setInput: ReturnType<typeof useChat>["setInput"];
}
