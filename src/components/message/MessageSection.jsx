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
    <div className=" flex h-screen flex-col justify-between pb-4 pl-3 pr-6 pt-8">
      <Header />
      <MessageList messages={messages} />
      <Input addMessage={addMessage} />
    </div>
  );
}

export default MessageSection;
