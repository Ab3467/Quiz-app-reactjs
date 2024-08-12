import React, { useEffect, useState } from 'react';

type QuestionTimerProps = {
  timeout: number;
  onTimeOut: () => void;
  mode: 'answered' | 'correct' | 'wrong' | '';
}

const QuestionTimer: React.FC<QuestionTimerProps> = ({ timeout, onTimeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState<number>(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={`w-1/2 h-2 rounded-full ${mode === 'answered' ? 'bg-[#f8e59c]' : 'bg-[#9e5ef8]'} text-[#9e5ef8]`}
    />
  );
};

export default QuestionTimer;
