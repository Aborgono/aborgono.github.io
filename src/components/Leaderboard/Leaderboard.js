import { useEffect, useState } from "react";
import axios from "axios";
import './Leaderboard.scss';

function LeaderBoard() {

  const [leaderBoard, setLeaderBoard] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
      axios.get('https://vercel-maze-runner-2cbwqwsp1-aborgono.vercel.app/api/leaderboard')
          .then((response) => {
              console.log("this is my response", response.data);
              setLeaderBoard(response.data);
              setLoading(false); // Data has been loaded, set loading to false
          })
          .catch((error) => {
              console.error("Error loading leaderboard data:", error);
              setLoading(false); // Even in case of an error, set loading to false
          });
  }, []);

    console.log("this is my user", leaderBoard);

  return (
    <div className="leaderboard-container">
      {loading ? (
          <p>Loading...</p>
      ) : (
          leaderBoard.map((user) => (
              <div key={user.id} className="leaderboard-entry">
                  <h1>{user.username}</h1>
                  <ul>
                      <li>Difficulty: {user.selectedMode}</li>
                      <li>Score: {user.score}</li>
                  </ul>
              </div>
          ))
      )}
    </div>
  );
}

export default LeaderBoard;