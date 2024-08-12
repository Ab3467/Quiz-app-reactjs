import { useState } from 'react';
import QuestionTimer from './question-timer'; 
import Answers from './answers'; 
import QUESTIONS from './questions-file';

type QuestionProps ={
  index: number;
  onSelectAnswer: (answer: string) => void;
  onSkipAnswer: () => void;
}

type AnswerState ={
  selectedAnswer: string;
  isCorrect: boolean | null;
}

export default function Question({
  index,
  onSelectAnswer,
  onSkipAnswer
}: QuestionProps) {
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

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeOut={answer.selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswers={answer.selectedAnswer}
        AnswerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
