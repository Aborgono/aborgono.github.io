import { useEffect, useState } from "react";
import axios from "axios";

function LeaderBoard() {
    const [leaderBoard, setLeaderBoard] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/users')
        .then((response) => {
            console.log("this is my response", response.data);
            setLeaderBoard(response.data)
        })
    }, [])

    console.log("this is my user", leaderBoard);
    return (
    <div>
        {leaderBoard.map((user) => (
            <div key={user.id}>
                <h1>{user.name}</h1>
                    <p>{user.score}</p>
            </div>
        ))
        }
    </div>
    );
}

export default LeaderBoard;