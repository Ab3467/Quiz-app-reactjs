import React, { useState } from 'react';
import QuestionTimer from './question-timer'; 
import Answers from './answers'; 
import QUESTIONS from './questions-file'; 

type QuestionProps = {
  index: number;
  questionText: string;
  answers: string[];
  selectedAnswer?: string | null;
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

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer: string) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState: 'answered' | 'correct' | 'wrong' | '' = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question" className="font-['Roboto Condensed'] text-xs text-[#9082a3] uppercase m-0">
      <QuestionTimer
        timeout={timer}
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
    </div>
  );
};

export default Question;
