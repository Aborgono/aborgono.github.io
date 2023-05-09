import React, { useEffect } from 'react';

const EasyMode = (props) => {
  const setPlayerY = props.setPlayerY
  const mazeLayout = [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    ];
  const startingPosition = mazeLayout[1][0]

  useEffect(() => {
    setPlayerY(startingPosition)
  })

  return <div>Easy Mode</div>;
};

export default EasyMode;