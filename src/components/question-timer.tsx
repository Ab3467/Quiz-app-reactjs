import React, { useEffect, useState } from 'react';

type QuestionTimerProps = {
  timeout: number;
  onTimeOut: () => void;
  mode: string;
}

const QuestionTimer: React.FC<QuestionTimerProps> = ({ timeout, onTimeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState<number>(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />;
}

export default QuestionTimer;
