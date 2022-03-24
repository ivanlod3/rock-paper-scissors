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

function getUserList() {
  return JSON.parse(localStorage.getItem('userList')) || [];
}

function getUser(name) {
  const userList = getUserList();
  return userList.find((player) => player.name === name);
}

function saveUser({ name, score }) {
  const userList = getUserList();
  const existingUser = userList.find((player) => player.name === name);
  if (existingUser) {
    existingUser.score = score;
  } else {
    userList.push({ name, score });
  }
  localStorage.setItem('userList', JSON.stringify(userList));
}

export { logIn, logOut, isLogged, getLoggedUser, getUser, saveUser };
