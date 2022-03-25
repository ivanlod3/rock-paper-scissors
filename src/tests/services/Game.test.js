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
});
