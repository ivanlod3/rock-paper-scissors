import { GAME_OPTIONS, getComputerOption } from '../../services/Game';

describe('Game Service', () => {
  test('returns any of the defined GAME_OPTIONS', async () => {
    const optionNames = GAME_OPTIONS.map((option) => option.name);
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
