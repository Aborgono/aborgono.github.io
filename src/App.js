import React, { useState } from 'react';
import Maze from './components/Maze/Maze';
import HomePage from './pages/HomePage';
import HowToPlay from './components/HowToPlay/HowToPlay';
import { Routes, Route} from 'react-router-dom';

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
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/howToPlay' element={<HowToPlay/>}></Route>
      </Routes>
    </>
  )
};

export default App;
