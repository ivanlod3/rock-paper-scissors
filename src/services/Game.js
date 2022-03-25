import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import React from 'react';
import { wait } from './Util';

const GAME_OPTIONS = [
  { name: 'rock', iconComponent: <FaHandRock /> },
  { name: 'paper', iconComponent: <FaHandPaper /> },
  { name: 'scissors', iconComponent: <FaHandScissors /> }
];

const LOGIC = {
  'rock vs paper': 'paper',
  'rock vs scissors': 'rock',
  'paper vs scissors': 'scissors'
};

async function getComputerOption() {
  await wait(1000);
  const optionArray = GAME_OPTIONS.map((option) => {
    return option.name;
  });
  return optionArray[Math.floor(Math.random() * 3)];
}

function gameLogic(playerOption, computerOption) {
  return (
    LOGIC[`${playerOption} vs ${computerOption}`] ||
    LOGIC[`${computerOption} vs ${playerOption}`]
  );
}

function play(playerOption, computerOption) {
  const result = gameLogic(playerOption, computerOption);
  return playerOption === result ? 1 : 0;
}

export { play, getComputerOption, GAME_OPTIONS };
