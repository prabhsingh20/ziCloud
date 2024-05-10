import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="relative flex items-center justify-between text-lg font-normal text-navbar">
        <img src="/companyLogo.png" alt="company logo" />

        {/* Hamburger menu icon for small screens */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="fixed right-8 top-6 z-30  text-main focus:outline-none"
          >
            {!isOpen ? (
              <span className="material-symbols-outlined">menu</span>
            ) : (
              <span className="material-symbols-outlined">close</span>
            )}
          </button>
        </div>

        {/* Navbar links */}
        <ul
          className={`fixed left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-white  ${isOpen ? "block" : "hidden"} lg:relative lg:mt-0 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:bg-transparent`}
        >
          <li className="mr-4">
            <a href="#">Home</a>
          </li>
          <li className="mr-4">
            <a href="#">Flashcard</a>
          </li>
          <li className="mr-4">
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <button className="rounded-[32px] bg-gradient-theme px-10 py-3 font-medium text-white">
            Login
          </button>
        </ul>

        {/* Login button */}
      </nav>
    </header>
  );
}

export default Header;
