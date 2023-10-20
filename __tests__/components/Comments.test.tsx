import { comments } from '@/app/constants';
import Comments from '@/components/Comments';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Comments', () => {
  it('should display cards', () => {
    render(
      <Comments
        animationKey="key"
        comments={comments}
      />,
    );
    const cards = screen.getAllByTestId('comment-card');
    expect(cards).toHaveLength(comments.length);
  });
});
