import { chats } from "../../data/data";
import { useChat } from "../ChatProvider";
import ChatsList from "./ChatsList";

function Profiles() {
  const { searchTerm } = useChat();

  const filteredChats = chats.filter((chat) =>
    chat?.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <ul>
      {filteredChats.map((chat) => (
        <ChatsList key={chat.id} chat={chat} />
      ))}
    </ul>
    //
  );
}

export default Profiles;
