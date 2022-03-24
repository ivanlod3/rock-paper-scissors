// TODO game logic

function getComputerOption() {
  return Math.floor(Math.random() * 3);
}

function play(playerOption) {
  const result = 1;
  if (playerOption === getComputerOption()) {
    return result;
  }
  return result;
}

const gameOptions = [
  { name: 'rock', iconString: 'FaHandRock' },
  { name: 'paper', iconString: 'FaHandPaper' },
  { name: 'scissors', iconString: 'FaHandScissors' }
];

export { play, gameOptions };
