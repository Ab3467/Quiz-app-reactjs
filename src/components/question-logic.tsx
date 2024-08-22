import React, { useState, useEffect } from 'react';
import QuestionTimer from './question-timer'; 
import Answers from './answers'; 
import { Button } from './ui/button'; 
import QUESTIONS from './questions-file'; 

type QuestionProps = {
  index: number;
  questionText: string;
  answers: string[];
  onSelectAnswer: (answer: string | null) => void;
  onSkipAnswer: () => void;
}

type AnswerState = {
  selectedAnswer: string;
  isCorrect: boolean | null;
}

const Question: React.FC<QuestionProps> = ({
  index,
  questionText,
  answers,
  onSelectAnswer,
  onSkipAnswer
}) => {
  const [answer, setAnswer] = useState<AnswerState>({
    selectedAnswer: '',
    isCorrect: null,
  });
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  useEffect(() => {
    if (quizStarted) {
      // Automatically start the timer when the quiz starts
      const timer = setTimeout(() => {
        if (answer.selectedAnswer === '') {
          onSkipAnswer();
        }
      }, 10000); // Assuming a 10-second timer
      return () => clearTimeout(timer);
    }
  }, [quizStarted, answer.selectedAnswer, onSkipAnswer]);

  const handleSelectAnswer = (selectedAnswer: string) => {
    setAnswer({
      selectedAnswer: selectedAnswer,
      isCorrect: QUESTIONS[index].answers[0] === selectedAnswer,
    });
    setTimeout(() => {
      onSelectAnswer(selectedAnswer);
    }, 2000); // Delay before moving to the next question
  };

  let answerState: 'answered' | 'correct' | 'wrong' | '' = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question" className="font-['Roboto Condensed'] text-xs text-[#9082a3] uppercase m-0">
      {!quizStarted ? (
        <Button
          onClick={handleStartQuiz}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Start Quiz
        </Button>
      ) : (
        <>
          <QuestionTimer
            timeout={10000} // 10-second timer for each question
            onTimeOut={answer.selectedAnswer === '' ? onSkipAnswer : () => {}}
            mode={answerState}
          />
          <h2 className="font-['Roboto'] text-xl font-normal my-2 text-[#c1b2dd]">{questionText}</h2>
          <Answers
            answers={answers}
            selectedAnswers={answer.selectedAnswer}
            AnswerState={answerState}
            onSelect={handleSelectAnswer}
          />
        </>
      )}
    </div>
  );
};

export default Question;
