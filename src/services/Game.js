// TODO game logic
function gameLogic(currentGame) {
  console.log(currentGame.score);
  currentGame.score = currentGame.score + 1;
  return currentGame;
}

export { gameLogic };
