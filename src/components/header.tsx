import React from 'react';
import Image from "../assets/quiz-logo.png"; // Ensure the path is correct

const Header: React.FC = () => {
  return (
    <header className="">
      <img src={Image} alt="logo-image" className="w-12 h-12"/>
      <h1 className="font-roboto-condensed font-bold text-4xl tracking-wider uppercase bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
        React Quiz
      </h1>
    </header>
  );
}

export default Header;
