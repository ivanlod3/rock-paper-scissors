import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../../components/button/Button';

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
      <Button
        className={testClassName}
        submit={testSubmit}
        onClick={onActionMock}
      >
        {testText}
      </Button>
    );
  });

  test('renders button text', () => {
    const text = component.getByText(testText);
    expect(text).toBeInTheDocument();
  });
});
