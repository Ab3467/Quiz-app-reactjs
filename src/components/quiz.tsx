import React,{useState} from "react";
import QUESTIONS from "../Question.js"

const Quiz : React.FC = () => {

  const [userAnswer,setUserAnswer] = useState<string>()
 
   const questionIndex = userAnswer?.length

  return (
    <div>
      <h1>{QUESTIONS[questionIndex].map((answer)=>{
        <li key={answer}></li>
      })}</h1>
    </div>
  )
}
export default Quiz;