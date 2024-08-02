import Chats from "../components/chat/Chats";
import MessageSection from "../components/chat/MessageSection";

function AllChats() {
  return (
    <div className="grid grid-cols-[auto_1fr] space-x-8  px-4 py-8">
      <Chats />
      <MessageSection />
    </div>
  );
}

export default AllChats;
