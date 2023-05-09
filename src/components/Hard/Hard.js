import React from 'react';
import {useEffect} from 'react';
const HardMode = (props) => {
  const setPlayerY = props.setPlayerY
  const mazeLayout = [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0],
    ];
  const startingPosition = mazeLayout[1][0]

    useEffect(() => {
      setPlayerY(startingPosition)
    })
  return <div>Hard Mode</div>;
};

export default HardMode;