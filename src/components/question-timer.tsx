import React, { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

type QuestionTimerProps = {
  timeout: number;
  onTimeOut: () => void;
  mode: "answered" | "correct" | "wrong" | "";
};

const QuestionTimer: React.FC<QuestionTimerProps> = ({
  timeout,
  onTimeOut,
  mode,
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(timeout);

  useEffect(() => {
    setRemainingTime(timeout);
  }, [timeout, mode]);

  useEffect(() => {
    if (remainingTime <= 0) {
      onTimeOut();
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, [remainingTime, onTimeOut]);

  const progressPercentage = (remainingTime / timeout) * 100;

  const colorClass =
    mode === "answered"
      ? "bg-[#f8e59c]"
      : mode === "correct"
      ? "bg-[#5af59d]"
      : mode === "wrong"
      ? "bg-[#f55a98]"
      : "bg-white";

  return (
    <Progress
      value={progressPercentage}
      className={`w-1/2 h-2 rounded-full transition-colors duration-300 ${colorClass}`}
    />
  );
};

export default QuestionTimer;
