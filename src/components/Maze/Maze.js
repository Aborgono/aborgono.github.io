import React, { useState, useEffect } from 'react';
import HomePage from '../../pages/HomePage';
import EasyMode from '../Easy/Easy';
import HardMode from '../Hard/Hard';
import MediumMode from '../Medium/Medium';

const Maze = (props) => {
    console.log("MAZE", props.selectedMode, );
    const username = props.username
    const selectedMode = props.selectedMode
    const startGame = props.startGame
    const gameStarted = props.gameStarted
    const [playerX, setPlayerX] = useState(0);
    const [playerY, setPlayerY] = useState();

    
   

    const handleKeyDown = (event) => {
        const { key } = event;
        
        // Calculate the new player position based on the arrow key pressed
        let newPlayerX = playerX;
        let newPlayerY = playerY;
        
        if (key === 'ArrowUp') {
            newPlayerY = playerY - 1;
        } else if (key === 'ArrowDown') {
            newPlayerY = playerY + 1;
        } else if (key === 'ArrowLeft') {
            newPlayerX = playerX - 1;
        } else if (key === 'ArrowRight') {
            newPlayerX = playerX + 1;
        }
        
        // Check if the new position is a valid move (not a wall)
        // if (mazeLayout[newPlayerY] && mazeLayout[newPlayerY][newPlayerX] !== 1) {
        //     setPlayerX(newPlayerX);
        //     setPlayerY(newPlayerY);
        //     if (newPlayerX === mazeLayout[0].length - 1) { //check for win
        //     }
        // } else {
        //     // handle loss
        // }
    };

    document.addEventListener('keydown', handleKeyDown);

    return (
        <div>
        <h2>Maze Game</h2>
        {selectedMode === 'easy' && <EasyMode setPlayerY={setPlayerY}/>}
        {selectedMode === 'medium' && <MediumMode setPlayerY={setPlayerY} />}
        {selectedMode === 'hard' && <HardMode setPlayerY={setPlayerY} />}
        </div>
    );
    };

export default Maze;