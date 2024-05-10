function RnFSection() {
  return (
    <section>
      <header>
        <h1 className="inline-block bg-gradient-theme bg-clip-text font-mont text-2xl font-bold text-transparent sm:text-[32px]">
          Relations and Functions ( Mathematics )
        </h1>

        <div className="flex flex-col  items-center justify-center gap-8">
          <ul className="mt-8 flex  cursor-pointer flex-wrap gap-x-12 gap-y-4 text-xl font-medium text-secondary">
            <li className="border-b-2 border-main pb-2 text-xl font-bold text-main">
              Study
            </li>
            <li>Quiz</li>
            <li>Test</li>
            <li>Game</li>
            <li>Others</li>
          </ul>

          <div className="relative flex h-[393.3px] w-[350px] items-center justify-center rounded-[42.51px] bg-gradient-bg font-lato text-4xl font-bold text-white sm:w-[500px] lg:w-[712px]">
            <img
              className="absolute left-8 top-8 cursor-pointer"
              src="/bulb.png"
              alt="bulb"
            />
            <span>9 + 6 + 7x - 2x - 3</span>
            <img
              className="absolute right-8 top-8 cursor-pointer"
              src="/speaker.png"
              alt="speaker"
            />
          </div>

          <div className="flex items-center gap-5 sm:gap-16 lg:gap-36">
            <img className="cursor-pointer" src="/restart.png" alt="restart" />
            <div className="flex items-center gap-5 lg:gap-10">
              <img
                className="cursor-pointer"
                src="/backbutton.png"
                alt="backbutton.png"
              />
              <p className="text-2xl font-bold text-paragraph">01/10</p>
              <img
                className="cursor-pointer"
                src="/nextbutton.png"
                alt="nextbutton.png"
              />
            </div>
            <img
              className="cursor-pointer"
              src="/fullscreen.png"
              alt="fullscreen.png"
            />
          </div>
        </div>

        <div className="my-16 flex items-center justify-between md:mt-8">
          <img
            className="hidden md:block"
            src="/otherLogo.png"
            alt="company logo"
          />
          <div className="flex items-center gap-4">
            <img className="cursor-pointer" src="/plus.png" alt="plus sign" />
            <p className="inline-block bg-gradient-theme bg-clip-text text-[28px] font-semibold text-transparent">
              Create Flashcard
            </p>
          </div>
        </div>
      </header>
    </section>
  );
}

export default RnFSection;
