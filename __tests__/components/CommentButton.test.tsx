import CommentButton from '@/components/CommentButton';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('CommentButton', () => {
  const mockToggleComments = jest.fn();

  it('should display the button', () => {
    render(
      <CommentButton
        showComments={true}
        toggleComments={mockToggleComments}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should display hide comments label', () => {
    render(
      <CommentButton
        showComments={true}
        toggleComments={mockToggleComments}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Hide comments');
  });

  it('should display show comments label', () => {
    render(
      <CommentButton
        showComments={false}
        toggleComments={mockToggleComments}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Show comments');
  });

  it('fire button function when clicked', async () => {
    render(
      <CommentButton
        showComments={false}
        toggleComments={mockToggleComments}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(mockToggleComments).toBeCalled();
  });

  it('should display the button icon', async () => {
    render(
      <CommentButton
        showComments={false}
        toggleComments={mockToggleComments}
      />,
    );
    const icon = screen.getByTestId('comment-button-icon');
    expect(icon).toBeInTheDocument();
  });
});
