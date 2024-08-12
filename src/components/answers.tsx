import React, { useRef } from 'react';
import { Button } from './ui/button';

interface AnswersProps {
  answers: string[];
  AnswerState: 'answered' | 'correct' | 'wrong' | '';
  selectedAnswers: string | null;
  onSelect: (answer: string) => void;
}

const Answers: React.FC<AnswersProps> = ({ answers, AnswerState, selectedAnswers, onSelect }) => {
  const shuffledAnswers = useRef<string[] | undefined>(undefined);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="list-none m-0 p-0 flex flex-col items-center gap-2">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswers === answer;
        let buttonClasses = 'inline-block w-full font-["Roboto Condensed"] text-base py-4 px-8 border-none rounded-full transition-all duration-200 ease-in-out disabled:opacity-50';

        if (AnswerState === 'answered' && isSelected) {
          buttonClasses += ' bg-[#f5a76c] text-[#2c203d]';
        } else if (AnswerState === 'correct' && isSelected) {
          buttonClasses += ' bg-[#5af59d] text-[#2c203d]';
        } else if (AnswerState === 'wrong' && isSelected) {
          buttonClasses += ' bg-[#f55a98] text-[#2c203d]';
        } else {
          buttonClasses += ' bg-[#6cb7f5] hover:bg-[#9d5af5] hover:text-white focus:bg-[#9d5af5] focus:text-white';
        }

        return (
          <li key={answer} className="w-[90%] mx-auto">
            <Button
              onClick={() => onSelect(answer)}
              className={buttonClasses}
              disabled={AnswerState !== ''}
              variant="default"
            >
              {answer}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
