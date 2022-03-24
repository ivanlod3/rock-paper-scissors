import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import React from 'react';

const gameOptions = [
  { name: 'rock', icon: <FaHandRock /> },
  { name: 'paper', icon: <FaHandPaper /> },
  { name: 'scissors', icon: <FaHandScissors /> }
];

function getComputerOption() {
  const optionArray = gameOptions.map((option) => {
    return option.name;
  });
  return optionArray[Math.floor(Math.random() * 3)];
}

function gameLogic(playerOption, computerOption) {
  const logic = {
    'rock vs paper': 'paper',
    'rock vs scissors': 'rock',
    'paper vs scissors': 'scissors'
  };
  return (
    logic[`${playerOption} vs ${computerOption}`] ||
    logic[`${computerOption} vs ${playerOption}`]
  );
}

function play(playerOption) {
  const result = gameLogic(playerOption, getComputerOption());
  return playerOption === result ? 1 : 0;
}

export { play, gameOptions };
