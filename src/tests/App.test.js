import { render, screen } from '@testing-library/react';
import App from '../../src/App';

test('renders Shopping List title on page', () => {
  render(<App />);
  const title = screen.getByText("My Shopping List") //getting html element that has the text
  expect(title).toBeInTheDocument()
});