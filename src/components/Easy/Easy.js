import React, { useEffect } from 'react';
import './Easy.scss'

const EasyMode = (props) => {
  const setPlayerY = props.setPlayerY
  const username = props.username
  const mazeLayout = [
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
    ];
  const startingPosition = mazeLayout[0][0]

  useEffect(() => {
    setPlayerY(startingPosition)
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
                className={`maze-cell ${cell === 1 ? 'wall' : 'path'}`}
              />
            ))}
          </div>
        ))}
      </div>
  </>
    );
};
  

export default EasyMode;

// ${rowIndex === 0 && cellIndex === 0 ? 'start' : ''}