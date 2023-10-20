import { comments } from '@/app/constants';
import CommentCard from '@/components/CommentCard';
import { getInitials } from '@/lib/getInitials';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('CommentCard', () => {
  const comment = comments[0];

  it('should display the user avatar', () => {
    render(<CommentCard comment={comment} />);
    const avatar = screen.getByText(
      getInitials({ name: comment.user.username }),
    );
    expect(avatar).toBeInTheDocument();
  });

  it('should display the username', () => {
    render(<CommentCard comment={comment} />);
    const username = screen.getByText(comment.user.username);
    expect(username).toBeInTheDocument();
  });

  it('should display the date', () => {
    render(<CommentCard comment={comment} />);
    const date = screen.getByTestId('comment-date');
    expect(date).toBeInTheDocument();
  });

  it('should display the text content', () => {
    render(<CommentCard comment={comment} />);
    const textContent = screen.getByText(comment.content);
    expect(textContent).toBeInTheDocument();
  });
});
