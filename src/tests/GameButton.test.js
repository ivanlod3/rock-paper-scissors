import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FaHandRock } from 'react-icons/fa';
import { GameButton } from '../components/game-button/GameButton';

describe('<GameButton />', () => {
  let component;
  const onActionMock = jest.fn();

  const testIcon = <FaHandRock />;
  const testName = 'rock';

  beforeEach(() => {
    onActionMock.mockClear();
  });

  beforeAll(() => {
    component = render(
      <GameButton
        name={testName}
        onGameButtonClick={onActionMock}
        icon={testIcon}
      />
    );
  });

  test('renders game at start', () => {
    const span = component.getByText('rock');
    expect(span).toBeInTheDocument();
  });
});
