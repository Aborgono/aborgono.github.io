import { useEffect, useState } from "react";
import axios from "axios";
import './Leaderboard.scss';
import { fetchDocuments } from "../../firebase/controller";
import backArrow from '../../assets/images/arrow-back-icon-which-is-suitable-for-commercial-work-and-easily-modify-or-edit-it-vector.jpg'
import { useNavigate } from "react-router-dom";

function LeaderBoard() {

  const [leaderBoard, setLeaderBoard] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(false); // Add error state
  const [data, setData] = useState([])
  const navigate = useNavigate()

  // const fetchData = fetchDocuments()

  const backToMenu = () => {
    navigate('/')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docData = await fetchDocuments()
        setData(docData)
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    }
    fetchData()
    setLoading(false)
  },[])
  
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
  <>
    <img className="back-arrow" src={backArrow} alt="backArrow" onClick={() => backToMenu()}/>
    <div className="leaderboard-container">
      {data.map((user) => (
        <div key={user.id} className="leaderboard-entry">
          <h1>{user.name}</h1>
          <ul>
            <li>Difficulty: {user.selectedMode}</li>
            <li>Score: {user.score}</li>
          </ul>
        </div>
      ))}
    </div>
  </>
 );
}

export default LeaderBoard;