import { comments, posts } from '@/app/constants';
import Post from '@/components/Post';
import { CardProvider } from '@/context/CardContext';
import { getInitials } from '@/lib/getInitials';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Post', () => {
  const post = posts[1];

  it('should display the users avatar', () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const avatar = screen.getByText(getInitials({ name: post.user.username }));
    expect(avatar).toBeInTheDocument();
  });

  it('should display the username', () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const username = screen.getByText(post.user.username);
    expect(username).toBeInTheDocument();
  });

  it('should display the date', () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const date = screen.getByTestId('post-date');
    expect(date).toBeInTheDocument();
  });

  it('should display the post image if available', () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('should not display the post image is not available', () => {
    const postWithNoImage = posts[0];
    render(
      <CardProvider>
        <Post
          post={postWithNoImage}
          comments={comments}
        />
      </CardProvider>,
    );
    const image = screen.queryByRole('img');
    expect(image).not.toBeInTheDocument();
  });

  it('should display the text content', () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const textContent = screen.getByText(post.content);
    expect(textContent).toBeInTheDocument();
  });

  it('should display the comment button', () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const button = screen.getByTestId('comment-button');
    expect(button).toBeInTheDocument();
  });

  it('should display the comment section when comment button is clicked', async () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const button = screen.getByTestId('comment-button');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const commentCards = screen.getAllByTestId('comment-card');
    expect(commentCards).toHaveLength(comments.length);
  });

  it('should display the like button', () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const button = screen.getByTestId('like-button');
    expect(button).toBeInTheDocument();
  });

  it('should change the icon when clicked', async () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const button = screen.getByTestId('like-button');

    const unlikedIcon = screen.getByTestId('unliked-icon');
    expect(unlikedIcon).toBeInTheDocument();
    expect(unlikedIcon).toHaveClass('text-white');

    await userEvent.click(button);

    const likedIcon = await screen.findByTestId('liked-icon');
    expect(likedIcon).toBeInTheDocument();
    expect(likedIcon).toHaveClass('text-red-400');
  });

  it('should display the reply button', () => {
    render(
      <CardProvider>
        <Post
          post={post}
          comments={comments}
        />
      </CardProvider>,
    );
    const button = screen.getByTestId('reply-button');
    expect(button).toBeInTheDocument();
  });
});
