import { getComputerOption, OPTIONS } from '../../services/Game';

describe('Game Service', () => {
  test('returns any of the defined GAME_OPTIONS', async () => {
    const optionNames = OPTIONS.map((option) => option.name);
    [
      await getComputerOption(),
      await getComputerOption(),
      await getComputerOption(),
      await getComputerOption()
    ].forEach((result) => {
      expect(optionNames).toContain(result);
    });
  });
});
