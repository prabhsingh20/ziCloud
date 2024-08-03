import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useChat } from "./ChatProvider";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useChat();

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className=" w-full rounded-2xl bg-chatAreaBackground px-6 py-4 pl-12 font-medium text-secondaryText outline-none placeholder:text-secondaryText"
      />
      <MagnifyingGlassIcon className="absolute left-4 top-4 h-6 text-secondaryText" />
    </div>
  );
}

export default SearchBar;
