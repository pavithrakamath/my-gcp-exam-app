import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders GCP Exam Practice title', () => {
  render(<App />);
  const titleElement = screen.getByText(/GCP Exam Practice/i);
  expect(titleElement).toBeInTheDocument();
});
