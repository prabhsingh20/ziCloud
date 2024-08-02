import SearchBar from "../SearchBar";
import Profiles from "./Profiles";

function Chats() {
  return (
    <div className="flex w-[340px] flex-col gap-4 px-2">
      <SearchBar />
      <div>
        <Profiles />
      </div>
    </div>
  );
}

export default Chats;
