import React, { useState } from 'react';
import Maze from './components/Maze/Maze';
import HomePage from './pages/HomePage';

const App = () => {
  const [username, setUsername] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = (username, mode) => {
    setUsername(username);
    setSelectedMode(mode);
    setGameStarted(true);
  };
  return (
    <>
      {!gameStarted ? (
        <HomePage startGame={startGame} />
      ) : (
        <Maze gameStarted={gameStarted} startGame={startGame} username={username} selectedMode={selectedMode} />
      )}
    </>
  )
};

export default App;
