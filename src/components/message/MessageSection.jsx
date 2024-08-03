import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import MessageList from "./MessageList";

function MessageSection() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="flex flex-col justify-between px-6">
      <Header />
      <MessageList messages={messages} />
      <Input addMessage={addMessage} />
    </div>
  );
}

export default MessageSection;
