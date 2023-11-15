import { navLinks } from '@/app/constants';
import Nav from '@/components/Nav';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { name: 'admin', email: 'admin@admin.com', image: null },
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
  it('should display the correct number of category links', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(navLinks.categories.length);
  });

  it('should display the logout button if authenticated', () => {
    render(<Nav />);

    const button = screen.getByRole('button', { name: /logout/i });
    expect(button).toBeInTheDocument();
  });

  it.todo('should not display the logout button if not authenticated');

  it.todo('should display the login and register links if not authenticated');
});
