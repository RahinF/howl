import { navLinks } from '@/app/constants';
import NavLink from '@/components/NavLink';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Nav', () => {
  const testLink = navLinks.categories[0];

  it('should display the list item', () => {
    render(<NavLink {...testLink} />);
    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();
  });

  it('should display the link', () => {
    render(<NavLink {...testLink} />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should display the icon', () => {
    render(<NavLink {...testLink} />);
    const icon = screen.getByTestId(`${testLink.label.toLowerCase()}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it('should display the label', () => {
    render(<NavLink {...testLink} />);
    const label = screen.getByText(testLink.label);
    expect(label).toBeInTheDocument();
  });
});
