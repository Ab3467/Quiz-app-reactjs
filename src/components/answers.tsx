import React, { useRef } from 'react';

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
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswers === answer;
        let cssClass = '';

        if (AnswerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if ((AnswerState === 'correct' || AnswerState === 'wrong') && isSelected) {
          cssClass = AnswerState; // Convert to lowercase for consistency
        }

        return (
          <li key={answer} className="answer">
            <button 
              onClick={() => onSelect(answer)} 
              className={cssClass} 
              disabled={AnswerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
