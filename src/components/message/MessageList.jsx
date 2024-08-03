const MessageList = ({ messages }) => {
  return (
    <div className="mt-4 flex flex-grow flex-col-reverse gap-2">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`max-w-xs break-words rounded-lg p-3 ${
            index % 2 === 0
              ? "self-end rounded-3xl bg-indigo-700 text-white"
              : "self-start rounded-3xl bg-receivedMessageBackground text-gray-800"
          }`}
        >
          <p className="text-primaryText">{message}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;