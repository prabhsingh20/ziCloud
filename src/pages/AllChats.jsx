import Chats from "../components/chat/Chats";
import { useChat } from "../components/ChatProvider";
import MessageSection from "../components/message/MessageSection";

function AllChats() {
  const { openChat } = useChat();
  return (
    <div className="grid grid-cols-[auto_1fr] space-x-8  px-4 py-8">
      <Chats />
      {openChat ? (
        <MessageSection />
      ) : (
        <div className="flex items-center justify-center">
          <p className=" text-2xl text-headerText">Start a conversation</p>
        </div>
      )}
    </div>
  );
}

export default AllChats;
