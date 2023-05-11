import React, { useEffect, useMemo, useState } from 'react';
import './Easy.scss'

const EasyMode = (props) => {
  const playerY = props.playerY
  const playerX = props.playerX
  const setPlayerX = props.setPlayerX
  const setPlayerY = props.setPlayerY
  const username = props.username
  const mazeLayout = [
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
    ];

    const handleKeyDown = (event) => {
      event.preventDefault();
      const { key } = event;
    
      if (key === 'ArrowUp' && playerY > 0) {
          setPlayerY(playerY - 1);
      } else if (key === 'ArrowDown' && playerY < mazeLayout.length - 1) {
          setPlayerY(playerY + 1);
      } else if (key === 'ArrowLeft' && playerX > 0) {
          setPlayerX(playerX - 1);
      } else if (key === 'ArrowRight' && playerX < mazeLayout[0].length - 1) {
          setPlayerX(playerX + 1);
      }

      if (
        playerX >= 0 &&
        playerX < mazeLayout[0].length &&
        playerY >= 0 &&
        playerY < mazeLayout.length &&
        mazeLayout[playerY][playerX] === 1
      ) {
        setPlayerX(0);
        setPlayerY(0);
      } 
      // if (
      //   playerX >= 0 &&
      //   playerX < mazeLayout[0].length &&
      //   playerY >= 0 &&
      //   playerY < mazeLayout.length &&
      //   mazeLayout[playerY][playerX] === 0
      // ) {
      //   if (playerY === mazeLayout.length - 1 && playerX === mazeLayout[0].length - 1) {
      //     console.log("YOU WON");
      //   } else {
      //     // Update the player's position if it's a valid move
      //     setPlayerX(playerX);
      //     setPlayerY(playerY);
      //   }
      // } else {
      //   // Reset the player's position to the beginning if it's a wall
      //   setPlayerX(0);
      //   setPlayerY(0);
      // }
      
    };
    

    

  useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
          document.removeEventListener('keydown', handleKeyDown)
      }
      })

  return (
    <>
      <div className='welcome-message'>Welcome to Easy Mode {username}</div>
      <div className="maze-container">
        {mazeLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="maze-row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`maze-cell ${cell === 1 ? 'wall' : rowIndex === playerY && cellIndex === playerX ? 'start' : 'path'}`}
              />
            ))}
          </div>
        ))}
      </div>
  </>
    );
};
  

export default EasyMode;
