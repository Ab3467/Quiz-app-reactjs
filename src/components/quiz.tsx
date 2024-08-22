import React, { useCallback, useState } from 'react';
import QUESTIONS from './questions-file'; // Ensure the path and file extension are correct for TypeScript
import Summary from './summary'; // Ensure the path and file extension are correct for TypeScript
import Question from './question-logic'; // Ensure the path and file extension are correct for TypeScript

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [timer, setTimer] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const activeQuestionIndex = userAnswers.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const startTimer = useCallback(() => {
    setTimer(10); // Assuming a 10-second timer for each question
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(intervalId);
          handleSkipAnswer(); // Skip the question if the time runs out
        }
        return prevTimer - 1;
      });
    }, 1000);
  }, []);

  const handleSelectAnswer = useCallback((selectedAnswer: string | null) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    startTimer(); // Restart the timer for the next question
  }, [startTimer]);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    startTimer(); // Start the timer when the quiz starts
  };

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers as string[]} />;
  }

  return (
    <div className='max-w-[50rem] font-roboto-condensed font-bold mx-auto p-8 bg-gradient-to-b from-[#3e2a60] to-[#321061] rounded-lg shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] text-center'>
      {!quizStarted ? (
        <div className="flex justify-center items-center h-screen">
          <button
            onClick={handleStartQuiz}
            className="px-4 py-2 bg-[#594276] text-white rounded-full shadow-lg"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <>
          <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            questionText={QUESTIONS[activeQuestionIndex].text}
            answers={QUESTIONS[activeQuestionIndex].answers}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
          />
          <div className="mt-4">
            <p className="text-white">Time Remaining: {timer} seconds</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
