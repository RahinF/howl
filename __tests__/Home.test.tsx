import Home from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Customer Reviews', () => {
  it('renders heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/home/i);
  });
});
