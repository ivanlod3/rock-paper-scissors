import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GameButton } from '../../components/game-button/GameButton';

describe('<GameButton />', () => {
  let component;
  const onActionMock = jest.fn();

  const testText = 'Exit';
  const testSubmit = false;
  const testClassName = 'btn';

  beforeEach(() => {
    onActionMock.mockClear();
  });

  beforeAll(() => {
    component = render(
      <GameButton
        className={testClassName}
        submit={testSubmit}
        onClick={onActionMock}
      >
        {testText}
      </GameButton>
    );
  });

  test('renders button text', () => {
    const text = component.getByText(testText);
    expect(text).toBeInTheDocument();
  });
});
