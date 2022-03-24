function getGame(userName) {
  return JSON.parse(localStorage.getItem(userName));
}

function saveGame(userName, currentGame) {
  localStorage.setItem(userName, JSON.stringify(currentGame));
}

// TODO game logic
function gameLogic(currentGame) {
  console.log(currentGame.score);
  currentGame.score = currentGame.score + 1;
  return currentGame;
}

export { getGame, saveGame, gameLogic };
