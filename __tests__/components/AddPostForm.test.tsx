import AddPostForm from '@/components/AddPostForm';
import { CardProvider } from '@/context/CardContext';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AddFormPost', () => {
  const mockAddPost = jest.fn();

  it('should display the comment textbox', () => {
    render(
      <CardProvider>
        <AddPostForm addPost={mockAddPost} />
      </CardProvider>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should display the file select button', () => {
    render(
      <CardProvider>
        <AddPostForm addPost={mockAddPost} />
      </CardProvider>,
    );
    const button = screen.getByRole('button', { name: /select file/i });
    expect(button).toBeInTheDocument();
  });

  it('should display the submit button', () => {
    render(
      <CardProvider>
        <AddPostForm addPost={mockAddPost} />
      </CardProvider>,
    );
    const button = screen.getByRole('button', { name: /create post/i });
    expect(button).toBeInTheDocument();
  });

  it('disables submit button if there is no comment', () => {
    render(
      <CardProvider>
        <AddPostForm addPost={mockAddPost} />
      </CardProvider>,
    );
    const button = screen.getByRole('button', { name: /create post/i });
    expect(button).toBeDisabled();
  });

  it('enables submit button if there is a comment', async () => {
    render(
      <CardProvider>
        <AddPostForm addPost={mockAddPost} />
      </CardProvider>,
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    await userEvent.type(input, 'test');

    const button = screen.getByRole('button', { name: /create post/i });
    expect(button).toBeEnabled();

    await userEvent.click(button);
    expect(mockAddPost).toBeCalled();
  });
});
