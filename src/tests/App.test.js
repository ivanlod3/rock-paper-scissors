import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('<App />', () => {
  let component;
  beforeEach(() => {
    component = render(<App />);
  });

  test('renders home at start', () => {
    const startButton = component.getByText('Start');
    expect(startButton).toBeInTheDocument();
  });

  // TODO redirection test
  // test('redirects to Game component when loggedIn', () => {
  //   localStorage.setItem('currentPlayer', 'test');
  //   const header = component.getByText('User:');
  //   expect(header).toBeInTheDocument();
  // });
});
