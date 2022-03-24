import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import React from 'react';

const gameOptions = [
  { name: 'rock', iconComponent: <FaHandRock /> },
  { name: 'paper', iconComponent: <FaHandPaper /> },
  { name: 'scissors', iconComponent: <FaHandScissors /> }
];

const logic = {
  'rock vs paper': 'paper',
  'rock vs scissors': 'rock',
  'paper vs scissors': 'scissors'
};

async function getComputerOption() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const optionArray = gameOptions.map((option) => {
    return option.name;
  });
  return optionArray[Math.floor(Math.random() * 3)];
}

function gameLogic(playerOption, computerOption) {
  return (
    logic[`${playerOption} vs ${computerOption}`] ||
    logic[`${computerOption} vs ${playerOption}`]
  );
}

function play(playerOption, computerOption) {
  const result = gameLogic(playerOption, computerOption);
  return playerOption === result ? 1 : 0;
}

export { play, getComputerOption, gameOptions };
