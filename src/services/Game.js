// TODO game logic
function gameLogic(currentGame) {
  console.log(currentGame.score);
  return { ...currentGame, score: currentGame.score + 1 };
}

export { gameLogic };
