import { navLinks } from '@/app/constants';
import Nav from '@/components/Nav';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Nav', () => {
  it('renders correct number of links', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(navLinks.length);
  });

  it('renders correct href', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', navLinks[index].href);
    });
  });

  it('renders label', () => {
    render(<Nav />);

    navLinks.forEach((link) => {
      const label = screen.getByText(link.label);
      expect(label).toBeInTheDocument();
    });
  });

  it('renders icon', () => {
    render(<Nav />);

    navLinks.forEach((link) => {
      const testId = `${link.label.toLowerCase()} icon`;
      const icon = screen.getByTestId(testId);
      expect(icon).toBeInTheDocument();
    });
  });
});
