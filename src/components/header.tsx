import React from 'react'
import Image from "../assets/quiz-logo.png"

 const Header:React.FC =()=> {
  return (
    <div>
      <img src={Image} alt="logo-image" />
      <h1 className="font-roboto font-bold text-4xl tracking-wider m-0 uppercase bg-gradient-text bg-clip-text text-transparent">React Quiz</h1>
    </div>
  )
}
export default Header