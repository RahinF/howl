import { comments } from '@/app/constants';
import Comments from '@/components/Comments';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Comments', () => {
  it('should display cards', () => {
    render(<Comments postId="1" />);
    const cards = screen.getAllByTestId('comment-card');
    expect(cards).toHaveLength(comments.length);
  });
});
