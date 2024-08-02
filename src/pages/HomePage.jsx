import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Details from "../components/chat/Details";

function HomePage() {
  return (
    <div className="hide-scrollbar grid h-screen grid-cols-[auto_1fr_auto] overflow-scroll">
      <Sidebar />
      <Main />
      <Details />
    </div>
  );
}

export default HomePage;
