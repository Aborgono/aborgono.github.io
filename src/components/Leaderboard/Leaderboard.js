import { useEffect, useState } from "react";
import axios from "axios";
import './Leaderboard.scss';

function LeaderBoard() {
    const [leaderBoard, setLeaderBoard] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/leaderBoard')
        .then((response) => {
            console.log("this is my response", response.data);
            setLeaderBoard(response.data)
        })
    }, [])

    console.log("this is my user", leaderBoard);
    return (
        <div className="leaderboard-container">
        {leaderBoard.map((user) => (
          <div key={user.id} className="leaderboard-entry">
            <h1>{user.username}</h1>
            <li>
              <ul>
                <li>Difficulty: {user.selectedMode}</li>
                <li>Score: {user.score}</li>
              </ul>
            </li>
          </div>
        ))}
      </div>
      
    );
}

export default LeaderBoard;