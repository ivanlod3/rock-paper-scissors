// TODO game logic
function gameLogic(currentGame) {
  return { ...currentGame, score: currentGame.score + 1 };
}

export { gameLogic };
