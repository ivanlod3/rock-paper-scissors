export function getUserName(userName) {
  return JSON.parse(localStorage.getItem(userName));
}
