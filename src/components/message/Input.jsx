import { MicrophoneIcon, PaperClipIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useChat } from "../ChatProvider";

function Input({ addMessage }) {
  const [message, setMessage] = useState("");
  const { selectedChat } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "" && selectedChat) {
      // Call addMessage with message text and chat partner's image
      addMessage({
        text: message,
        sender: "user",
        partnerImage: selectedChat.img,
      });
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-2xl bg-selectedMessageBackground px-6 py-4 pl-12 font-medium text-secondaryText outline-none placeholder:text-secondaryText"
        />
        <PaperClipIcon className="absolute left-4 top-4 h-6 text-secondaryText" />
        <MicrophoneIcon className="absolute right-4 top-4 h-6 text-secondaryText" />
      </div>
    </form>
  );
}

export default Input;
