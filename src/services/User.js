function logIn(userName) {
  return localStorage.setItem('currentPlayer', userName);
}

function logOut() {
  return localStorage.removeItem('currentPlayer');
}

function isLogged(userName) {
  return localStorage.getItem('currentPlayer') === userName;
}

function getLoggedUser() {
  return localStorage.getItem('currentPlayer');
}

function getUserData(userName) {
  return JSON.parse(localStorage.getItem(userName));
}

function saveUserData(userName, currentGame) {
  localStorage.setItem(userName, JSON.stringify(currentGame));
}

export { logIn, logOut, isLogged, getLoggedUser, getUserData, saveUserData };
