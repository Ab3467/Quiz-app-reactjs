import React from "react";
import Header from "../src/components/header";
import Quiz from "./components/quiz";

const App: React.FC = () => {
  return (
    <div className="bg-custom-bg bg-fixed bg-cover bg-center m-0 p-8 min-h-screen">
      <Header />
      <menu>
        <Quiz />
      </menu>
    </div>
  );
};

export default App;
