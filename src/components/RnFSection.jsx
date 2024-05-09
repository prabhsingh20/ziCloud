function RnFSection() {
  return (
    <section>
      <header>
        <h1 className="bg-gradient-theme inline-block bg-clip-text font-mont text-[32px] font-bold text-transparent">
          Relations and Functions ( Mathematics )
        </h1>

        <div className="flex flex-col items-center justify-center gap-8">
          <ul className="text-secondary mt-8 flex cursor-pointer gap-12 text-xl font-medium">
            <li className="border-main text-main border-b-2 pb-2 text-xl font-bold">
              Study
            </li>
            <li>Quiz</li>
            <li>Test</li>
            <li>Game</li>
            <li>Others</li>
          </ul>

          <div className="bg-gradient-bg font-lato relative flex h-[393.3px] w-[712px] items-center justify-center rounded-[42.51px] text-4xl font-bold text-white">
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

          <div className="flex items-center gap-36">
            <img className="cursor-pointer" src="/restart.png" alt="restart" />
            <div className="flex  items-center gap-10">
              <img
                className="cursor-pointer"
                src="/backbutton.png"
                alt="backbutton.png"
              />
              <p className="text-paragraph text-2xl font-bold">01/10</p>
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

        <div className="mt-8 flex items-center justify-between">
          <img src="/otherLogo.png" alt="company logo" />
          <div className="flex items-center gap-4">
            <img className="cursor-pointer" src="/plus.png" alt="plus sign" />
            <p className="bg-gradient-theme inline-block bg-clip-text text-[28px] font-semibold text-transparent">
              Create Flashcard
            </p>
          </div>
        </div>
      </header>
    </section>
  );
}

export default RnFSection;
