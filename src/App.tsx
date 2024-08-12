import React from 'react';
import Header from '../src/components/header'; // Ensure the path is correct
import Quiz from './components/quiz';

const App: React.FC = () => {
  return (
    <div className="bg-custom-bg bg-fixed bg-cover bg-center m-0 p-8 min-h-screen">
      <Header />
      <Quiz/>
    </div>
  );
}

export default App;
