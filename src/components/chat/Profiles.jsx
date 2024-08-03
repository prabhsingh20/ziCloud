import { useChat } from "../ChatProvider";
import ChatsList from "./ChatsList";
import { chats } from "../../data/data";

function Profiles() {
  const { searchTerm, handleOpenChat, selectedChat } = useChat();

  const filteredChats = chats.filter((chat) =>
    chat?.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <ul>
      {filteredChats.map((chat) => (
        <ChatsList
          key={chat.id}
          chat={chat}
          onClick={() => handleOpenChat(chat)} // Pass the chat object
          selectedChat={selectedChat} // Pass selectedChat for active styling
        />
      ))}
    </ul>
  );
}

export default Profiles;
