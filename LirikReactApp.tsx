// src/App.test.tsx

import React from 'react';
import { render } from '@testing-library/react';

const App: React.FC = () => {
  const greeting = 'Hello, World!';

  return <h1>{greeting}</h1>;
};

test('renders hello world', () => {
  const { getByText } = render(<App />);
  const helloWorldText = getByText(/hello, world/i);
  expect(helloWorldText).toBeInTheDocument();
});
