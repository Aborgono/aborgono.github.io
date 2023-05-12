import React, { useState, useEffect, useCallback } from 'react';
import HomePage from '../../pages/HomePage';
import EasyMode from '../Easy/Easy';
import HardMode from '../Hard/Hard';
import MediumMode from '../Medium/Medium';
import './Maze.scss';

const Maze = (props) => {
    const username = props.username
    const selectedMode = props.selectedMode
    const [playerX, setPlayerX] = useState(0);
    const [playerY, setPlayerY] = useState(0);
    const [score, setScore] = useState(100);

    // const handleKeyDown = (event) => {
    //     event.preventDefault()
    //     const { key } = event;

    //     if (key === 'ArrowUp') {
    //         setPlayerY(playerY - 1);
    //     } else if (key === 'ArrowDown') {
    //         setPlayerY(playerY + 1);
    //     } else if (key === 'ArrowLeft') {
    //         setPlayerX(playerX - 1);
    //     } else if (key === 'ArrowRight') {
    //         setPlayerX(playerX + 1);
    //     }
    // };

    // const handleKeyDown = (event) => {
    //     event.preventDefault();
    //     const { key } = event;
    
    //     if (key === 'ArrowUp' && playerY > 0 && mazeLayout[playerY - 1][playerX] !== 1) {
    //         setPlayerY(playerY - 1);
    //     } else if (key === 'ArrowDown' && playerY < mazeLayout.length - 1 && mazeLayout[playerY + 1][playerX] !== 1) {
    //         setPlayerY(playerY + 1);
    //     } else if (key === 'ArrowLeft' && playerX > 0 && mazeLayout[playerY][playerX - 1] !== 1) {
    //         setPlayerX(playerX - 1);
    //     } else if (key === 'ArrowRight' && playerX < mazeLayout[0].length - 1 && mazeLayout[playerY][playerX + 1] !== 1) {
    //         setPlayerX(playerX + 1);
    //     }
    //   };

    // useEffect(() => {
    //     document.addEventListener('keydown', handleKeyDown);
    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown)
    //     }
    //     })
        
    return (
        <div>
        <h2 className='maze-game-title'>Maze Game</h2>
        {selectedMode === 'easy' && <EasyMode setScore={setScore} score={score} username={username} setPlayerX={setPlayerX} setPlayerY={setPlayerY} playerX={playerX} playerY={playerY}/>}
        {selectedMode === 'medium' && <MediumMode setScore={setScore} score={score} username={username} setPlayerX={setPlayerX} setPlayerY={setPlayerY} playerX={playerX} playerY={playerY} />}
        {selectedMode === 'hard' && <HardMode setScore={setScore} score={score} username={username} setPlayerX={setPlayerX} setPlayerY={setPlayerY} playerX={playerX} playerY={playerY} />}
        </div>
    );
    };

export default Maze;