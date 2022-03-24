import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FaHandRock } from 'react-icons/fa';
import { GameButton } from '../components/game-button/GameButton';

describe('<GameButton />', () => {
  let component;
  const onActionMock = jest.fn();
  const option = {
    iconComponent: <FaHandRock />,
    name: 'rock'
  };
  beforeEach(() => {
    onActionMock.mockClear();
  });

  beforeAll(() => {
    component = render(
      <GameButton option={option} onGameButtonClick={onActionMock} />
    );
  });

  test('renders game at start', () => {
    const span = component.getByText(option.name);
    expect(span).toBeInTheDocument();
  });
});
