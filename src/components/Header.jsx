function Header() {
  return (
    <header>
      <nav className="text-navbar flex items-center justify-between  text-lg font-normal">
        <img src="/companyLogo.png" alt="company logo" />
        <ul className="flex cursor-pointer items-center gap-10">
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
          <button className="bg-gradient-theme rounded-[32px] px-10 py-3 font-medium text-white">
            Login
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
