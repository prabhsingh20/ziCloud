function ChatsList({ chat }) {
  const { img, fullName, message, minAgo } = chat;
  return (
    <li className="mt-4 flex cursor-pointer items-center space-x-4 rounded-2xl bg-selectedMessageBackground px-4 py-3">
      <img src={img} alt="" className="h-14 rounded-xl" />
      <div className="flex w-full flex-col space-y-1">
        <div className="flex items-center justify-between text-primaryText">
          <h4 className="text-base ">{fullName}</h4>
          <span className="text-xs">{minAgo}</span>
        </div>
        <p className="text-sm text-secondaryText">{message}</p>
      </div>
    </li>
  );
}

export default ChatsList;
