import { navLinks } from '@/app/constants';
import Nav from '@/components/Nav';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: 'admin' },
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return { data: mockSession, status: 'authenticated' };
    }),
  };
});

describe('Nav', () => {
  it('should display the correct number of links', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(navLinks.length);
  });

  it('should display the correct href', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', navLinks[index].href);
    });
  });

  it('should display the label', () => {
    render(<Nav />);

    navLinks.forEach((link) => {
      const label = screen.getByText(link.label);
      expect(label).toBeInTheDocument();
    });
  });

  it('should display the icon', () => {
    render(<Nav />);

    navLinks.forEach((link) => {
      const testId = `${link.label.toLowerCase()}-icon`;
      const icon = screen.getByTestId(testId);
      expect(icon).toBeInTheDocument();
    });
  });

  it('should display the logout button if authenticated', () => {
    render(<Nav />);

    const button = screen.getByRole('button', { name: /logout/i });
    expect(button).toBeInTheDocument();
  });

  it('should not display the logout button if not authenticated', () => {
    (useSession as jest.Mock).mockReturnValueOnce({
      data: null,
      status: 'unauthenticated',
    });

    const button = screen.queryByRole('button', { name: /logout/i });
    expect(button).not.toBeInTheDocument();
  });
});
