import React, { useEffect, useMemo, useState } from 'react';
import './Easy.scss'

const EasyMode = (props) => {
  const [mazeVisible, setMazeVisible] = useState(false);
  const playerY = props.playerY
  const playerX = props.playerX
  const setPlayerX = props.setPlayerX
  const setPlayerY = props.setPlayerY
  const username = props.username
  const score = props.score
  const setScore = props.setScore
  const showScore = document.querySelector("div.score")
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
      console.log(playerX, playerY);
    
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
        setScore(score - 20)
      } 
    };
    
  useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
          document.removeEventListener('keydown', handleKeyDown)
      }
      })

      if (playerX === 4 && playerY === 3) {
        showScore.style.display = "block";
      }

      const handleClick = () => {
        setMazeVisible(true);
        setScore(score - 20)
        setTimeout(() => {
          setMazeVisible(false);
        }, 1000);
      };

  return (
    <>
      <div className='welcome-message'>Welcome to Easy Mode {username}
        <button className='button' onClick={handleClick}>Show Maze</button>
      </div>
      <div className="maze-container" style={{ visibility: mazeVisible ? 'visible' : 'hidden' }}>
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
      <div className='score'>score: {score}</div>
  </>
    );
};
  

export default EasyMode;
