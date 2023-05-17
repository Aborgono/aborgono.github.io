import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import HomePage from '../../pages/HomePage';
import EasyMode from '../Easy/Easy';
import HardMode from '../Hard/Hard';
import MediumMode from '../Medium/Medium';
import './Maze.scss';
import { useNavigate } from 'react-router-dom';

const Maze = (props) => {
    const username = props.username
    const selectedMode = props.selectedMode
    const [playerX, setPlayerX] = useState(0);
    const [playerY, setPlayerY] = useState(0);
    const [score, setScore] = useState(120);
    const [failureQuote, setFailureQuote] = useState();
    const [successQuote, setSuccessQuote] = useState();
    const navigate = useNavigate();
    const apiKey = 'jg2gZ6JhSxFv+Urms3ZXiA==R6DxnzdO2uwY9y7U'

    useEffect(() => {
        console.log(selectedMode);
        if (!selectedMode) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        axios.get(`https://api.api-ninjas.com/v1/quotes?category=success`, { headers: { 'x-api-key': apiKey } }).then((response) => {
            setSuccessQuote(response.data[0].quote);
        });
    }, []);

    return (
        <>
            <div className='background'>
            <h2 className='maze-game-title'>Maze Game</h2>
            {selectedMode === 'easy' && <EasyMode successQuote={successQuote} setScore={setScore} score={score} username={username} setPlayerX={setPlayerX} setPlayerY={setPlayerY} playerX={playerX} playerY={playerY}/>}
            {selectedMode === 'medium' && <MediumMode successQuote={successQuote} setScore={setScore} score={score} username={username} setPlayerX={setPlayerX} setPlayerY={setPlayerY} playerX={playerX} playerY={playerY} />}
            {selectedMode === 'hard' && <HardMode successQuote={successQuote} setScore={setScore} score={score} username={username} setPlayerX={setPlayerX} setPlayerY={setPlayerY} playerX={playerX} playerY={playerY} />}
            </div>
        </>
    );
    };

export default Maze;