function getUserData(userName) {
  return JSON.parse(localStorage.getItem(userName));
}

function saveUserData({ userName, currentGame }) {
  localStorage.setItem(userName, JSON.stringify(currentGame));
}

export { getUserData, saveUserData };
