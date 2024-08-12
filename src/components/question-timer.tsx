import React, { useEffect, useState } from 'react';
import { Progress } from './ui/progress';

type QuestionTimerProps = {
  timeout: number;
  onTimeOut: () => void;
  mode: 'answered' | 'correct' | 'wrong' | '';
}

const QuestionTimer: React.FC<QuestionTimerProps> = ({ timeout, onTimeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState<number>(timeout);

  useEffect(() => {
    if (remainingTime <= 0) {
      onTimeOut();
      return;
    }
    
    // Decrement the remaining time every 100ms
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => Math.max(prevRemainingTime - 100, 0));
    }, 100);
    
    // Clear interval and timer on component unmount or when timeout changes
    return () => clearInterval(interval);
  }, [remainingTime, onTimeOut]);

  return (
    <Progress
      max={timeout}
      value={timeout - remainingTime}
      className={`w-1/2 h-2 rounded-full ${mode === 'answered' ? 'bg-[#f8e59c]' : mode === 'correct' ? 'bg-[#5af59d]' : mode === 'wrong' ? 'bg-[#f55a98]' : 'bg-[#9e5ef8]'} transition-colors duration-300`}
    />
  );
};

export default QuestionTimer;
