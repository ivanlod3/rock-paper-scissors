// TODO game logic
function gameLogic(currentGame) {
  return { ...currentGame, score: currentGame.score + 1 };
}

const gameOptions = [
  { name: 'rock', iconString: 'FaHandRock' },
  { name: 'paper', iconString: 'FaHandPaper' },
  { name: 'scissors', iconString: 'FaHandScissors' }
];

export { gameLogic, gameOptions };
