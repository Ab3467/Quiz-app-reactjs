import React, { useState } from 'react';
import QUESTIONS from '../question.js'; // Import as you have it

const Quiz: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState<string | undefined>(undefined);


  const questionIndex = userAnswer?.length


  return (
    <div>
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <ul>
        {QUESTIONS[questionIndex].map((answer, index) => (
          <li key={index}>{}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
