import { useState } from "react";
import { questionsArray } from "../constants";

function Faq() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section className="mb-36 mt-16 px-4">
      <h1 className="bg-gradient-theme inline-block bg-clip-text text-5xl text-[28px] font-bold text-transparent">
        FAQ
      </h1>
      <div>
        {questionsArray.map((questions, index) => (
          <div
            key={questions.id}
            className="mt-8 flex w-[848px] cursor-pointer flex-col justify-center gap-4 rounded-xl border-[1px] border-[#217EEC] "
          >
            <h1
              className="text-faq flex items-center justify-between px-4 py-4 text-base font-semibold"
              onClick={() => toggleAnswer(index)}
            >
              {questions.question}
              {openQuestionIndex === index ? (
                <span className="material-symbols-outlined">
                  keyboard_arrow_up
                </span>
              ) : (
                <span className="material-symbols-outlined">expand_more</span>
              )}
            </h1>
            {openQuestionIndex === index && (
              <p className="text-secondary flex items-center justify-between px-4 pb-4 text-sm font-medium">
                {questions.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
