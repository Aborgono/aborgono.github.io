import React, { useEffect, useMemo, useState } from 'react';
import './Easy.scss'

const EasyMode = (props) => {
  const playerY = props.playerY
  const playerX = props.playerX
  const username = props.username
  const handleKeyDown = props.handleKeyDown
  const mazeLayout = [
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
    ];

  // const startingPosition = mazeLayout[0][0]
  // const startingPosition = 0

  // useEffect(() => {
  //   console.log('in EASY useEffect');
  //   setPlayerY(0)
  // }, [])

  // document.addEventListener('keydown', (e) => handleKeyDown(e));

useEffect(() => {
  console.log("Setting up eventListener");
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
