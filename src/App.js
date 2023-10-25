import React, { useState } from 'react';
import Maze from './components/Maze/Maze';
import HomePage from './pages/HomePage';
import HowToPlay from './components/HowToPlay/HowToPlay';
import { Routes, Route, useNavigate} from 'react-router-dom';
import LeaderBoard from './components/Leaderboard/Leaderboard';

const App = () => {
  const [username, setUsername] = useState();
  const [selectedMode, setSelectedMode] = useState();
  const [gameStarted, setGameStarted] = useState(false);
  const navigate = useNavigate()
  const startGame = (username, mode) => {
    setUsername(username);
    setSelectedMode(mode);
    setGameStarted(true);
    navigate('/maze')
  };
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage startGame={startGame}/>}></Route>
        <Route path='/maze' element={<Maze gameStarted={gameStarted} startGame={startGame} username={username} selectedMode={selectedMode} />}></Route>
        <Route path='/howToPlay' element={<HowToPlay/>}></Route>
        <Route path='/leaderboard' element={<LeaderBoard/>}></Route>
      </Routes>
    </>
  )
};

export default App;
