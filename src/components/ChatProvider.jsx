import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openChat, setOpenChat] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleOpenChat() {
    setOpenChat(!openChat);
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
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
