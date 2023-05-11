import React, { useState, useEffect, useCallback } from 'react';
import HomePage from '../../pages/HomePage';
import EasyMode from '../Easy/Easy';
import HardMode from '../Hard/Hard';
import MediumMode from '../Medium/Medium';
import './Maze.scss';

const Maze = (props) => {
    console.log("MAZE", props.selectedMode );
    const username = props.username
    const selectedMode = props.selectedMode
    const [playerX, setPlayerX] = useState(0);
    const [playerY, setPlayerY] = useState(0);

    const handleKeyDown = (event) => {
        // document.removeEventListener('keydown', handleKeyDown)
    // const handleKeyDown = useMemo((event) => {
        event.preventDefault()
        const { key } = event;
        console.log('HERE', key, playerX, playerY);
  
        if (key === 'ArrowUp') {
            setPlayerY(playerY - 1);
        } else if (key === 'ArrowDown') {
            setPlayerY(playerY + 1);
        } else if (key === 'ArrowLeft') {
            setPlayerX(playerX - 1);
        } else if (key === 'ArrowRight') {
            setPlayerX(playerX + 1);
        }
    // }, []);
    };
   

   
        
        // Check if the new position is a valid move (not a wall)
        // if (mazeLayout[newPlayerY] && mazeLayout[newPlayerY][newPlayerX] !== 1) {
        //     setPlayerX(newPlayerX);
        //     setPlayerY(newPlayerY);
        //     if (newPlayerX === mazeLayout[0].length - 1) { //check for win
        //     }
        // } else {
        //     // handle loss
        // }
    return (
        <div>
        <h2 className='maze-game-title'>Maze Game</h2>
        {selectedMode === 'easy' && <EasyMode username={username} handleKeyDown={handleKeyDown} playerX={playerX} playerY={playerY}/>}
        {selectedMode === 'medium' && <MediumMode username={username} setPlayerY={setPlayerY} />}
        {selectedMode === 'hard' && <HardMode username={username} setPlayerY={setPlayerY} />}
        </div>
    );
    };

export default Maze;