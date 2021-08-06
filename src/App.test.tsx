import React from 'react'
import { render, screen } from '@testing-library/react'
import { state } from './redux/state'
import { App } from './App'

test('renders learn react link', () => {
  render(<App state={ state } />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
