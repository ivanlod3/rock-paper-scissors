import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import React from 'react';
import { getRandomNumber, wait } from './Util';

const GAME_STATUS = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING'
};

const GAME_OPTIONS = [
  { name: 'rock', beats: 'scissors', iconComponent: <FaHandRock /> },
  { name: 'paper', beats: 'rock', iconComponent: <FaHandPaper /> },
  { name: 'scissors', beats: 'paper', iconComponent: <FaHandScissors /> }
];

const GAME_RESULTS = {
  win: { name: 'win', text: 'You win!', score: 1 },
  lose: { name: 'lose', text: 'You lose!', score: 0 },
  tie: { name: 'tie', text: "It's a tie!", score: 0 }
};

async function getComputerOption() {
  await wait(1000);
  const optionArray = GAME_OPTIONS.map(({ beats, name }) => {
    return { name, beats };
  });
  return optionArray[getRandomNumber()];
}

function getResult(playerOption, computerOption) {
  if (playerOption.name === computerOption.name) {
    return GAME_RESULTS.tie;
  }
  return playerOption.beats === computerOption.name
    ? GAME_RESULTS.win
    : GAME_RESULTS.lose;
}

async function play(setStatusText, playerOption) {
  setStatusText(`You chose ${playerOption.name}`);
  await wait(1000);
  setStatusText('Computer is choosing...');
  const computerOption = await getComputerOption();
  const result = getResult(playerOption, computerOption);
  setStatusText(`Computer chose ${computerOption.name}`);
  await wait(1000);
  setStatusText(result.text);
  await wait(1000);
  return result;
}

export { play, getComputerOption, GAME_OPTIONS, GAME_RESULTS, GAME_STATUS };
