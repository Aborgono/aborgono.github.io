import React, { useEffect, useState } from 'react';
import './Easy.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EasyMode = (props) => {
  const [mazeVisible, setMazeVisible] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const playerY = props.playerY
  const playerX = props.playerX
  const setPlayerX = props.setPlayerX
  const setPlayerY = props.setPlayerY
  const username = props.username
  const score = props.score
  const setScore = props.setScore
  const showScore = document.querySelector("div.score")
  const successQuote = props.successQuote
  // const notify = () => toast("Wow so easy!");
  const mazeLayout = [
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0, 2],
    [1, 1, 1, 1, 1],
    ];

    const handleKeyDown = (event) => {
      event.preventDefault();
      const { key } = event;
      console.log(playerX, playerY);
      let newPlayerX = playerX
      let newPlayerY = playerY

      if (key === 'ArrowUp' && playerY > 0) {
          newPlayerY = (newPlayerY - 1);
      } else if (key === 'ArrowDown' && playerY < mazeLayout.length - 1) {
          newPlayerY = (newPlayerY + 1);
      } else if (key === 'ArrowLeft' && playerX > 0) {
          newPlayerX = (newPlayerX - 1);
      } else if (key === 'ArrowRight' && playerX < mazeLayout[0].length - 1) {
          newPlayerX = (newPlayerX + 1);
      }
      
      if (
        newPlayerX >= 0 &&
        newPlayerX < mazeLayout[0].length &&
        newPlayerY >= 0 &&
        newPlayerY < mazeLayout.length &&
        mazeLayout[newPlayerY][newPlayerX] === 1
      ) {
        newPlayerX = 0;
        newPlayerY = 0;
        setScore(score - 10);
        toast("YOU'VE RUN INTO A WALL: Never give up!")
      } else {
        if (newPlayerX === 4 && newPlayerY === 3) {
          showScore.style.display = "block";
          toast(`YOU WON: ${successQuote}`)
        }
      }
      setPlayerX(newPlayerX)
      setPlayerY(newPlayerY)

    };
    
  useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
          document.removeEventListener('keydown', handleKeyDown)
      }
      })

      const handleClick = () => {
        setMazeVisible(true);
        setFirstClick(true);
        setScore(score - 20)
        setTimeout(() => {
          setMazeVisible(false);
        }, 1000);
      };

      const playerTileClass = (rowIndex, cellIndex) => {
        return (rowIndex === playerY && cellIndex === playerX ? 'start' : 'path')
      }
  return (
    <>
      <div className='welcome-message'>Welcome to Easy Mode {username}
        <button className='button' onClick={handleClick}>Show Maze</button>
      </div>
      <div className="maze-container">
        {mazeVisible ? (
          <>
            {mazeLayout.map((row, rowIndex) => (
              <div key={rowIndex} className="maze-row">
                {row.map((cell, cellIndex) => (
                  <div
                    key={cellIndex}
                    className={`maze-cell ${cell === 1 ? 'wall' : cell === 2 ? 'finish' : playerTileClass(rowIndex, cellIndex) }`}
                  />
                ))}
              </div>
            ))}
          </>
        ) : ( 
          <>
            {mazeLayout.map((row, rowIndex) => (
              <div key={rowIndex} className="maze-row">
                {row.map((cell, cellIndex) => (
                  <div
                    key={cellIndex}
                    className={`maze-cell ${cell === 2 && firstClick ? 'finish' : playerTileClass(rowIndex, cellIndex) }`}
                  />
                ))}
              </div>
            ))}
          </>
        )}

      </div>
      <div className='score'>score: {score}</div>
      <ToastContainer
            position="bottom-center"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
  </>
    );
};
  

export default EasyMode;
