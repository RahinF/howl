import { posts } from '@/app/constants';
import ReplyForm from '@/components/ReplyForm';
import { CardProvider } from '@/context/CardContext';
import { getInitials } from '@/lib/getInitials';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ReplyForm', () => {
  const addComment = jest.fn();
  const closeDialog = jest.fn();
  const replyTo = posts[0];

  const props = { addComment, closeDialog, replyTo };

  it('should display the close button', () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  it('should display the post owners username', () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const username = screen.getByRole('heading', {
      name: replyTo.user.username,
    });

    expect(username).toBeInTheDocument();
  });

  it('should display the post owners avatar', () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const avatarPlaceholder = screen.getByText(
      getInitials({ name: replyTo.user.username }),
    );
    expect(avatarPlaceholder).toBeInTheDocument();
  });

  it('should display the post owners text content', () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const textContent = screen.getByText(replyTo.content);

    expect(textContent).toBeInTheDocument();
  });

  it('should display the post owners posted date', () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );

    const date = screen.getByTestId('date');
    expect(date).toBeInTheDocument();
  });

  it('triggers the click function of the close button', async () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(closeDialog).toBeCalled();
  });

  it('should display the textbox', () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const textbox = screen.getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  it('enables submit button when text is entered', async () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const text = 'test';
    const textbox = screen.getByRole('textbox');

    await userEvent.type(textbox, text);
    expect(textbox).toHaveTextContent(text);

    const replyButton = screen.getByRole('button', { name: /reply/i });

    expect(replyButton).toBeEnabled();
  });

  it('submits form', async () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const text = 'test';
    const textbox = screen.getByRole('textbox');

    await userEvent.type(textbox, text);
    expect(textbox).toHaveTextContent(text);

    const replyButton = screen.getByRole('button', { name: /reply/i });
    await userEvent.click(replyButton);

    expect(addComment).toBeCalled();
  });

  it('should display the reply button', () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const button = screen.getByRole('button', { name: /reply/i });
    expect(button).toBeInTheDocument();
  });

  it('disables reply button when dialog is opened', () => {
    render(
      <CardProvider>
        <ReplyForm {...props} />
      </CardProvider>,
    );
    const button = screen.getByRole('button', { name: /reply/i });
    expect(button).toBeDisabled();
  });
});
