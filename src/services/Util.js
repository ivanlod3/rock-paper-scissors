async function wait(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

export { wait, getRandomNumber };
