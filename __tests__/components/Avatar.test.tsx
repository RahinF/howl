import Avatar from '@/components/Avatar';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Avatar', () => {
  const username = 'avacado toast';

  it('should display the initials of the username', () => {
    render(<Avatar username={username} />);
    const initials = screen.getByText('AT');
    expect(initials).toBeInTheDocument();
  });
});
