import React, { useCallback, useState } from 'react';
import QUESTIONS from './questions-file'; 
import Summary from './summary'; 
import Question from './question-logic'; 

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer: string | null) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />; 
  }

  return (
    <div className='max-w-[50rem] font-roboto-condensed font-bold mx-auto p-8 bg-gradient-to-b from-[#3e2a60] to-[#321061] rounded-lg shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] text-center'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
