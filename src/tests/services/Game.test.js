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

  // FIXME: mock the getComputerOption function
  // test('returns the correct result', async () => {
  //   const testComputerOption = {
  //     name: 'scissors',
  //     beats: 'paper'
  //   };
  //   jest
  //     .spyOn(exportedForTesting, 'getComputerOption')
  //     .mockImplementation(() => testComputerOption);
  //   expect(await exportedForTesting.getComputerOption()).toEqual(
  //     testComputerOption
  //   );
  //   const playerOption = { name: 'rock', beats: 'scissors' };
  //   const result = play(jest.fn(), playerOption);
  //   expect(await result).toEqual({ name: 'win', score: 1, text: 'You win!' });
  // });
});
