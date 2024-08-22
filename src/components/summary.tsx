import React from "react";
import quizComplt from "../assets/quiz-complete.png";
import QUESTIONS from "./questions-file";

interface SummaryProps {
  userAnswers: (string | null)[];
}

const Summary: React.FC<SummaryProps> = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const totalQuestions = userAnswers.length;
  const skippedAnswersPercentage = Math.round(
    (skippedAnswers.length / totalQuestions) * 100
  );
  const correctAnswersPercentage = Math.round(
    (correctAnswers.length / totalQuestions) * 100
  );
  const wrongAnswersPercentage =
    100 - skippedAnswersPercentage - correctAnswersPercentage;

  return (
    <div className="max-w-3xl mx-auto my-8 p-8 bg-gradient-to-b from-[#a17eda] to-[#895fc4] text-[#191321] rounded-lg shadow-lg animate-slide-in">
      <img
        src={quizComplt}
        alt="Quiz complete"
        className="block w-32 h-32 object-contain mx-auto mb-4 p-4 filter drop-shadow-lg border-2 border-[#3a2353] rounded-full bg-[#c18cfa]"
      />
      <h2 className="font-['Roboto'] text-4xl text-center my-0 uppercase text-[#3a2353]">
        Quiz Completed!
      </h2>
      <div className="flex gap-12 w-3/5 mx-auto mb-8 pb-4 border-b-2 border-[#594276]">
        <p className="flex-1 flex flex-col m-0">
          <span className="font-['Roboto Condensed'] text-4xl text-[#594276]">
            {skippedAnswersPercentage}%
          </span>
          <span className="font-['Roboto Condensed'] text-xs text-[#30273a] mt-[1rem] ml-1 tracking-wider uppercase">
            skipped
          </span>
        </p>
        <p className="flex-1 flex flex-col m-0">
          <span className="font-['Roboto Condensed'] text-4xl text-[#594276]">
            {correctAnswersPercentage}%
          </span>
          <span className="font-['Roboto Condensed'] text-xs text-[#30273a] mt-[1rem] ml-1 tracking-wider uppercase">
            answered correctly
          </span>
        </p>
        <p className="flex-1 flex flex-col m-0">
          <span className="font-['Roboto Condensed'] text-4xl text-[#594276]">
            {wrongAnswersPercentage}%
          </span>
          <span className="font-['Roboto Condensed'] text-xs text-[#30273a] mt-[1rem] ml-1 tracking-wider uppercase">
            answered incorrectly
          </span>
        </p>
      </div>
      <ol className="list-none mx-auto my-8 p-0 text-center">
        {userAnswers.map((answer, index) => {
          let cssClass = "text-base font-bold my-1";

          if (answer === null) {
            cssClass += " text-[#d1baf2]";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " text-[#054e37]";
          } else {
            cssClass += " text-[#730b4b]";
          }

          return (
            <li
              key={index}
              className="my-8 flex flex-col items-center font-['Roboto Condensed']"
            >
              <h3 className="text-base my-0 flex justify-center items-center text-center bg-[#2c203d] text-[#d8cde8] w-8 h-8 rounded-full mb-2">
                {index + 1}
              </h3>
              <p className="text-base text-[#30273a] my-1">
                {QUESTIONS[index].text}
              </p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
