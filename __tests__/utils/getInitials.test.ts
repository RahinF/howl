import { getInitials } from '@/lib/getInitials';
import '@testing-library/jest-dom';

describe('getInitials', () => {
  it('return initials', () => {
    const name = 'john smith';
    expect(getInitials({ name })).toEqual('JS');
  });

  it('return a string with a length of 2 if no limit is passed', () => {
    const name = 'john the ultimate fighter smith';
    expect(getInitials({ name })).toHaveLength(2);
  });

  it('limits length to 3 if limit is 3', () => {
    const name = 'john the ultimate fighter smith';
    const limit = 3;
    expect(getInitials({ name, limit })).toHaveLength(limit);
  });
});
