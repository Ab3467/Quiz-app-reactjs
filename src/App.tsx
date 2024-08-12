import React from 'react';
import Header from '../src/components/header'; // Ensure the path is correct

const App: React.FC = () => {
  return (
    <div className="bg-custom-bg bg-fixed bg-cover bg-center m-0 p-2rem min-h-screen">
      <Header />
    </div>
  );
}

export default App;
