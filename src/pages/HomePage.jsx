import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Details from "../components/chat/Details";
import { useChat } from "../components/ChatProvider";

function HomePage() {
  const { isOpen } = useChat();

  return (
    <div className="hide-scrollbar grid h-screen grid-cols-[auto_1fr_auto] overflow-scroll">
      <Sidebar />
      <Main />
      {isOpen && <Details />}
    </div>
  );
}

export default HomePage;
