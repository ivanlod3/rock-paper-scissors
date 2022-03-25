import { getRandomNumber, wait } from './Util';
import { OPTIONS, RESULTS } from '../constants/constants';
import { STATUS_TEXT } from '../constants/strings';
import { WAITING_TIME } from '../constants/settings';

async function getComputerOption() {
  await wait(WAITING_TIME);
  const optionNames = OPTIONS.map(({ beats, name }) => {
    return { name, beats };
  });
  return optionNames[getRandomNumber()];
}

function getResult(playerOption, computerOption) {
  if (playerOption.name === computerOption.name) {
    return RESULTS.tie;
  }
  return playerOption.beats === computerOption.name
    ? RESULTS.win
    : RESULTS.lose;
}

async function play(setStatusText, playerOption) {
  setStatusText(`${STATUS_TEXT.PLAYER_CHOSE} ${playerOption.name}`);
  await wait(WAITING_TIME);
  setStatusText(STATUS_TEXT.COMPUTER_CHOOSING);
  const computerOption = await getComputerOption();
  const result = getResult(playerOption, computerOption);
  setStatusText(`${STATUS_TEXT.COMPUTER_CHOSE} ${computerOption.name}`);
  await wait(WAITING_TIME);
  setStatusText(result.text);
  await wait(WAITING_TIME);
  return result;
}

const exportedForTesting = {
  getComputerOption,
  getResult
};

export { play, RESULTS, exportedForTesting };
