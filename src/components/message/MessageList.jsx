const MessageList = ({ messages, userImage, partnerImage }) => {
  return (
    <div className="hide-scrollbar mt-4 flex h-full flex-grow flex-col-reverse gap-2 overflow-scroll">
      {messages.map((message, index) => {
        // Determine if the message is from the user or the partner
        const isUserMessage = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex items-center ${isUserMessage ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`ml-2 max-w-xs break-words rounded-lg p-3 ${
                isUserMessage
                  ? "bg-indigo-700 text-white"
                  : "bg-receivedMessageBackground text-gray-800"
              }`}
            >
              <p className="text-primaryText">{message.text}</p>
            </div>
            <img
              src={isUserMessage ? userImage : partnerImage}
              alt="user"
              className="h-8 w-8 rounded-full"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
