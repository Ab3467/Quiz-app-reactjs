import React, { useCallback, useState } from 'react';
import QUESTIONS from './questions-file'; // Ensure the path and file extension are correct for TypeScript
import Summary from './summary'; // Ensure the path and file extension are correct for TypeScript
import Question from './question-logic'; // Ensure the path and file extension are correct for TypeScript

// type QuestionType = {
//   id: string;
//   text: string;
//   answers: string[];
// }

// type QuestionProps = {
//   index: number;
//   questionText: string;
//   answers: string[];
//   selectedAnswer?: string | null;
//   onSelectAnswer: (answer: string | null) => void;
//   onSkipAnswer: () => void;
// }

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]); // Adjusted to include null

  const activeQuestionIndex = userAnswers.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer: string | null) => {
    setUserAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers as string[]} />;
  }

  return (
    <div className='max-w-[50rem] mx-auto p-8 bg-gradient-to-b from-[#3e2a60] to-[#321061] rounded-lg shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] text-center"'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[activeQuestionIndex] || null} // Ensure proper handling of index
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
