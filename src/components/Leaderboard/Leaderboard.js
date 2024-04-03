import { useEffect, useState } from "react";
import axios from "axios";
import './Leaderboard.scss';

function LeaderBoard() {

  const [leaderBoard, setLeaderBoard] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(false); // Add error state


  useEffect(() => {
    axios.get('https://vercel-maze-runner-2cbwqwsp1-aborgono.vercel.app/api/leaderboard')
      .then((response) => {
        console.log("this is my response", response.data);
        setLeaderBoard(response.data);
      })
      .catch((error) => {
        console.error("Error loading leaderboard data:", error);
        setError(true); // Set error state to true in case of an error
      })
      .finally(() => setLoading(false)); // Set loading to false in both cases
  }, []);
  
  console.log("this is my user", leaderBoard);
  
 // Conditional rendering based on loading and error states
 if (loading) return <p>Loading...</p>;
 if (error) return (
   <div className="leaderboard-entry">
     <h1>"Test User: DB has been disabled"</h1>
     <ul>
       <li>Difficulty: Easy</li>
       <li>Score: 100</li>
     </ul>
   </div>
 );

 return (
   <div className="leaderboard-container">
     {leaderBoard.map((user) => (
       <div key={user.id} className="leaderboard-entry">
         <h1>{user.username}</h1>
         <ul>
           <li>Difficulty: {user.selectedMode}</li>
           <li>Score: {user.score}</li>
         </ul>
       </div>
     ))}
   </div>
 );
}

export default LeaderBoard;