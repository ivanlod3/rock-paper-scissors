import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GameOption } from '../../components/game-option/GameOption';

describe('<GameOption />', () => {
  let component;
  const onActionMock = jest.fn();
  const option = {
    icon: ['fa-solid', 'fa-hand-back-fist'],
    name: 'rock'
  };
  beforeEach(() => {
    onActionMock.mockClear();
  });

  beforeAll(() => {
    component = render(
      <GameOption option={option} onGameOptionClick={onActionMock} />
    );
  });

  test('renders button text', () => {
    const span = component.getByText(option.name);
    expect(span).toBeInTheDocument();
  });
});
