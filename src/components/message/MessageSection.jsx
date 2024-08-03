import { useChat } from "../ChatProvider";
import Header from "./Header";
import Input from "./Input";
import MessageList from "./MessageList";
import { useState } from "react";

function MessageSection() {
  const { selectedChat, openChat } = useChat();
  const [messages, setMessages] = useState([]);

  const userImage =
    "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Bat&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=ScreamOpen&skinColor=Light";

  const partnerImage = selectedChat ? selectedChat.img : "";

  const addMessage = (message) => {
    setMessages([
      ...messages,
      {
        ...message,
        senderImage: message.sender === "user" ? userImage : partnerImage,
      },
    ]);
  };

  if (!openChat) return null; // Optionally, hide MessageSection if no chat is open

  return (
    <div className="flex h-screen flex-col justify-between pb-4 pl-3 pr-6 pt-8">
      <Header />
      <MessageList
        messages={messages}
        userImage={userImage}
        partnerImage={partnerImage}
      />
      <Input addMessage={addMessage} />
    </div>
  );
}

export default MessageSection;
