import { exportedForTesting } from '../../services/Game';
import { OPTIONS } from '../../constants/constants';
import * as settings from '../../constants/settings';
import { WAITING_TIME } from '../../constants/settings';

describe('Game Service', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-import-assign
    settings.WAITING_TIME = 0;
  });

  test('returns any of the defined constants.OPTIONS', async () => {
    expect(WAITING_TIME).toBe(0);
    const optionNames = OPTIONS.map((option) => {
      const { name, beats } = option;
      return { name, beats };
    });
    [
      await exportedForTesting.getComputerOption(),
      await exportedForTesting.getComputerOption(),
      await exportedForTesting.getComputerOption(),
      await exportedForTesting.getComputerOption()
    ].forEach((result) => {
      expect(optionNames).toContainEqual(result);
    });
  });

  test('returns player wins', async () => {
    const testComputerOption = {
      name: 'scissors',
      beats: 'paper'
    };
    const playerOption = { name: 'rock', beats: 'scissors' };
    const result = exportedForTesting.getResult(
      playerOption,
      testComputerOption
    );
    expect(await result).toEqual({ name: 'win', score: 1, text: 'You win!' });
  });

  test('returns player lose', async () => {
    const testComputerOption = {
      name: 'scissors',
      beats: 'paper'
    };
    const playerOption = { name: 'paper', beats: 'rock' };
    const result = exportedForTesting.getResult(
      playerOption,
      testComputerOption
    );
    expect(await result).toEqual({ name: 'lose', score: 0, text: 'You lost!' });
  });

  test("returns it's a tie", async () => {
    const testComputerOption = {
      name: 'scissors',
      beats: 'paper'
    };
    const playerOption = { name: 'scissors', beats: 'paper' };
    const result = exportedForTesting.getResult(
      playerOption,
      testComputerOption
    );
    expect(await result).toEqual({
      name: 'tie',
      score: 0,
      text: "It's a tie!"
    });
  });
});
