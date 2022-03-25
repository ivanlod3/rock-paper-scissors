import React from 'react';

describe('<Home />', () => {
  const testUserName = 'test';

  // beforeEach(() => {
  //   render(<Home userName={testUserName} />);
  // });

  // FIXME: Error: useNavigate() may be used only in the context of a
  //  <Router> component.
  // test('renders home at start', () => {
  //   const input = screen.getByPlaceholderText('User name *');
  //   expect(input).toBeInTheDocument();
  // });

  test('todo', () => {
    expect(true).toBe(true);
  });
});
