import React from 'react'
import Image from "../assets/quiz-logo.png"

 const Header:React.FC =()=> {
  return (
    <div>
      <img src={Image} alt="logo-image" />
    </div>
  )
}
export default Header