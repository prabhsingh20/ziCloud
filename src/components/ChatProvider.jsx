import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openChat, setOpenChat] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChat, setSelectedChat] = useState(null); // New state for selected chat

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleOpenChat(chat) {
    setOpenChat(true);
    setSelectedChat(chat);
  }

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        handleOpen,
        openChat,
        handleOpenChat,
        searchTerm,
        setSearchTerm,
        selectedChat, // Provide selectedChat in context
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
