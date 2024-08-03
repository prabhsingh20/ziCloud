import SearchBar from "../SearchBar";
import Profiles from "./Profiles";

function Chats() {
  return (
    <div className="hide-scrollbar flex h-screen w-[340px] flex-col gap-4 overflow-scroll px-4 py-6">
      <SearchBar />
      <div>
        <Profiles />
      </div>
    </div>
  );
}

export default Chats;
