import { getInitials } from '@/lib/getInitials';
import '@testing-library/jest-dom';

describe('getInitials', () => {
  it('returns initials', () => {
    const name = 'john smith';
    expect(getInitials({ name })).toEqual('JS');
  });

  it('returns initials with 2 characters by default', () => {
    const name = 'john the ultimate fighter smith';
    expect(getInitials({ name })).toHaveLength(2);
  });

  it('returns initials with 3 characters if limit is 3', () => {
    const name = 'john the ultimate fighter smith';
    const limit = 3;
    expect(getInitials({ name, limit })).toHaveLength(limit);
  });
});
