import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EasyMode from '../Easy/Easy';
import HardMode from '../Hard/Hard';
import MediumMode from '../Medium/Medium';
import './Maze.scss';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/images/arrow-back-icon-which-is-suitable-for-commercial-work-and-easily-modify-or-edit-it-vector.jpg'


const Maze = (props) => {
    const username = props.username
    const selectedMode = props.selectedMode
    const [playerX, setPlayerX] = useState(0);
    const [playerY, setPlayerY] = useState(0);
    const [score, setScore] = useState(120);
    const [successQuote, setSuccessQuote] = useState();
    const navigate = useNavigate();
    const apiKey = 'jg2gZ6JhSxFv+Urms3ZXiA==R6DxnzdO2uwY9y7U'

    useEffect(() => {
        if (!selectedMode) {
            navigate('/')
        }
    }, [])

    const backToMenu = () => {
        navigate('/')
    }


    return (
        <>
            <div className='background'>
            <h2 className='maze-game-title'>Maze Game</h2>
            <img className="back-arrow-maze" src={backArrow} alt="backArrow" onClick={() => backToMenu()}/>

            {selectedMode === 'easy' && <EasyMode selectedMode={selectedMode} successQuote={successQuote} setScore={setScore} score={score} username={username} setPlayerX={setPlayerX} setPlayerY={setPlayerY} playerX={playerX} playerY={playerY}/>}
            {selectedMode === 'medium' && <MediumMode selectedMode={selectedMode} successQuote={successQuote} setScore={setScore} score={score} username={username} setPlayerX={setPlayerX} setPlayerY={setPlayerY} playerX={playerX} playerY={playerY} />}
            {selectedMode === 'hard' && <HardMode selectedMode={selectedMode} successQuote={successQuote} setScore={setScore} score={score} username={username} setPlayerX={setPlayerX} setPlayerY={setPlayerY} playerX={playerX} playerY={playerY} />}
            </div>
        </>
    );
    };

export default Maze;