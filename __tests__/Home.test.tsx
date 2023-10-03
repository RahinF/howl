import Home from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1, name: /home/i });
    expect(heading).toBeInTheDocument();
  });
});
