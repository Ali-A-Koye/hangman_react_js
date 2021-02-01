import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Game from './components/game';

import './App.css';



function App() {
  const [isStarted, setIsStarted] = useState(true);

  function changeState() {
    setIsStarted(true);
  }
  let gameStarted;
  if (isStarted) {
    gameStarted = <Game />;
  } else {
    gameStarted = <Dashboard startGame={changeState} />;
  }
  return (
    <div className="App">
      {gameStarted}
    </div>
  );
}

export default App;
