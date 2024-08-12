import React from 'react';
import Header from '../src/components/header'; // Ensure the path is correct
import Quiz from './components/quiz';

const App: React.FC = () => {
  return (
   <div className="">
    <Header/>
    <main>
      <Quiz/>
    </main>
   </div>
  );
}

export default App;
