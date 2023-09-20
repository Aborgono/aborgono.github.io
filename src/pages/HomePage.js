import React, { useState } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
// import axios from 'axios';


const HomePage = (props) => {
  const startGame = props.startGame;
  const [username, setUsername] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    startGame(username, selectedMode);
  };
  // sendUserAndDifficultyToBackend(username, selectedMode);
  

  // const sendUserAndDifficultyToBackend = (username, selectedMode) => {
  //     const data = { username, selectedMode};
      
  //     axios.post('http://localhost:8080/users', data)
  //       .then (response => {
  //         console.log('Data sent successfully: ', response);
  //       })
  //       .catch(error => {
  //         console.log("Data not sent: ", error);
  //       })
  // };

  return (
    <div className="homepage">
      <h2 className="homepage__title">Welcome Maze Runner!</h2>
      <form className="homepage__form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="homepage__input"
          />
        </label>
        <br />
        <label>
          Select mode:
          <select
            value={selectedMode}
            onChange={handleModeChange}
            className="homepage__select"
          >
            <option value="">Select a mode</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />
        <button
          type="submit"
          disabled={!username || !selectedMode}
          className="homepage__button"
        >
          Start Game
        </button>
        <Link to='/howToPlay'>
          <button type="submit" className="instructions">How to play</button>
        </Link>
        <Link to='/leaderboard'>
          <button type="submit" className="instructions">LeaderBoard</button>
        </Link>
      </form>
    </div>
  );
};

export default HomePage;




// import React, { useState } from 'react';

// const HomePage = (props) => {
//     const startGame = props.startGame
//     const [username, setUsername] = useState('');
//     const [selectedMode, setSelectedMode] = useState('');

//     const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//     };

//     const handleModeChange = (event) => {
//     setSelectedMode(event.target.value);
//     };

//     const handleSubmit = (event) => {
//     event.preventDefault();
//     startGame(username, selectedMode);
//     };

// return (
// <div>
//     <h2>Welcome to the Maze Game!</h2>
//     <form onSubmit={handleSubmit}>
//     <label>
//         Username:
//         <input type="text" value={username} onChange={handleUsernameChange} />
//     </label>
//     <br />
//     <label>
//         Select mode:
//         <select value={selectedMode} onChange={handleModeChange}>
//         <option value="">Select a mode</option>
//         <option value="easy">Easy</option>
//         <option value="medium">Medium</option>
//         <option value="hard">Hard</option>
//         </select>
//     </label>
//     <br />
//     <button type="submit" disabled={!username || !selectedMode}>
//         Start Game
//     </button>
//     </form>
// </div>
// );
// };

// export default HomePage;