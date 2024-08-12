import React from 'react';
import Image from "../assets/quiz-logo.png"; 

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center my-8 text-center">
      <img
        src={Image}
        alt="logo-image"
        className="w-12 h-12 mb-4 drop-shadow-md"
      />
      <h1 className="font-roboto-condensed font-bold text-4xl tracking-wider uppercase bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
        React Quiz
      </h1>
    </header>
  );
}

export default Header;
