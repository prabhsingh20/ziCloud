import { useChat } from "../ChatProvider";

function ChatsList({ chat }) {
  const { img, fullName, message, minAgo } = chat;
  const { handleOpenChat } = useChat();

  // Define maximum length for truncation
  const MAX_LENGTH = 20;

  // Determine if message should be truncated
  const shouldTruncate = message.length > MAX_LENGTH;
  const truncatedMessage = shouldTruncate
    ? `${message.slice(0, MAX_LENGTH)}...`
    : message;

  return (
    <li
      className="mt-4 flex w-full cursor-pointer items-center space-x-4 rounded-2xl bg-chatAreaBackground px-4 py-3"
      onClick={handleOpenChat}
    >
      <img src={img} alt="" className="h-14 rounded-xl" />
      <div className="flex w-full flex-col space-y-1">
        <div className="flex items-center justify-between text-primaryText">
          <h4 className="text-base">{fullName}</h4>
          <span className="text-xs">{minAgo}</span>
        </div>
        <p className="text-sm text-secondaryText">{truncatedMessage}</p>
      </div>
    </li>
  );
}

export default ChatsList;
