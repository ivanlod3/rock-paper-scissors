function getGame(userName) {
  return JSON.parse(localStorage.getItem(userName));
}

function saveGame(userName, currentGame) {
  localStorage.setItem(userName, JSON.stringify(currentGame));
}

export { getGame, saveGame };
