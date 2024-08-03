import { useState } from "react";
import { useChat } from "../ChatProvider";
import Header from "./Header";
import Input from "./Input";
import MessageList from "./MessageList";

function MessageSection() {
  const { openChat } = useChat();
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  if (!openChat) return null; // Optionally, hide MessageSection if no chat is open

  return (
    <div className="flex h-screen flex-col justify-between pb-4 pl-3 pr-6 pt-8">
      <Header />
      <MessageList messages={messages} />
      <Input addMessage={addMessage} />
    </div>
  );
}

export default MessageSection;
