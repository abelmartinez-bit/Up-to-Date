// App.test.js - Basic test file for the application
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders news aggregator header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Global News Aggregator/i);
  expect(headerElement).toBeInTheDocument();
});
