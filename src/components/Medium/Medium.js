import React from 'react';
import { useEffect } from 'react';

const MediumMode = (props) => {
  const setPlayerY = props.setPlayerY
  const mazeLayout = [
    [0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0],
    ];
  const startingPosition = mazeLayout[0][0]

  useEffect(() => {
    setPlayerY(startingPosition)
  })
  return <div>Medium Mode</div>;
};

export default MediumMode;