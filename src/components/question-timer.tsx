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
    if (remainingTime === 0) {
      onTimeOut();
      return;
    }
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => Math.max(prevRemainingTime - 100, 0));
    }, 100);

    return () => clearInterval(interval);
  }, [remainingTime, onTimeOut]);

  const progressPercentage = (remainingTime / timeout) * 100;

  return (
    <Progress
      max={100}
      value={progressPercentage}
      className={`w-1/2 h-2 rounded-full transition-colors duration-300 ${
        mode === "answered"
          ? "bg-[#f8e59c]"
          : mode === "correct"
          ? "bg-[#5af59d]"
          : mode === "wrong"
          ? "bg-[#f55a98]"
          : "bg-[#9e5ef8]"
      }`}
    />
  );
};

export default QuestionTimer;
