function SearchBar() {
  return (
    <input
      type="search"
      placeholder="Search"
      className=" w-full rounded-2xl bg-selectedMessageBackground px-6 py-4 font-medium text-secondaryText outline-none placeholder:text-secondaryText"
    />
  );
}

export default SearchBar;
