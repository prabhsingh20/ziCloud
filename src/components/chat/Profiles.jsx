import { chats } from "../../data/data";
import ChatsList from "./ChatsList";

function Profiles() {
  return (
    <ul>
      {chats.map((chat) => (
        <ChatsList key={chat.id} chat={chat} />
      ))}
    </ul>
    //
  );
}

export default Profiles;
