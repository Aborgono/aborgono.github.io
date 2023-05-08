import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import EasyMode from './EasyMode';
import MediumMode from './MediumMode';
import HardMode from './HardMode';

const Maze = () => {
  const [username, setUsername] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [playerX, setPlayerX] = useState(0);
  const [playerY, setPlayerY] = useState();

  const startGame = (username, mode) => {
    setUsername(username);
    setSelectedMode(mode);
    setGameStarted(true);
  };

  useEffect(() => {
    let mazeLayout = []; // Placeholder for the maze layout

    // Set up the maze layout based on the selected mode
    if (selectedMode === 'easy') {
      // Set up the maze layout for easy mode
      mazeLayout = [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
      ];
    } else if (selectedMode === 'medium') {
      // Set up the maze layout for medium mode
      mazeLayout = [
        [1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 0, 1],
      ];
    } else if (selectedMode === 'hard') {
      // Set up the maze layout for hard mode
      mazeLayout = [
        [1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ];
    }

    // Set the initial position of the player
    setPlayerY(Math.floor(mazeLayout.length / 2));

    // Start the game logic and handle player navigation, collisions, etc.
    const handleKeyDown = (event) => {
      // Logic to handle the player's navigation using arrow keys
      // Check for collisions with walls and update score
      // Handle win or loss conditions
      // Update playerX and playerY based on arrow key input
    };

    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted, selectedMode]);

  if (!gameStarted) {
    return <HomePage startGame={startGame} />;
  }

  return (
    <div>
      <h2>Maze Game</h2>
      {selectedMode === 'easy' && <EasyMode />}
      {selectedMode === 'medium' && <MediumMode />}
      {selectedMode === 'hard' && <HardMode />}
    </div>
  );
};

export default Maze;