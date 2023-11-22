import { posts } from '@/app/constants';
import RecentActivityCard from '@/components/RecentActivityCard';
import { getInitials } from '@/lib/getInitials';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('RecentActivity', () => {
  const post = posts[0];

  it('should display the user avatar', () => {
    render(<RecentActivityCard post={post} />);
    const avatar = screen.getByText(
      getInitials({ name: post.author.username }),
    );
    expect(avatar).toBeInTheDocument();
  });

  it('should display the username', () => {
    render(<RecentActivityCard post={post} />);
    const username = screen.getByText(post.author.username);
    expect(username).toBeInTheDocument();
  });

  it('should display the date', () => {
    render(<RecentActivityCard post={post} />);
    const date = screen.getByTestId('date');
    expect(date).toBeInTheDocument();
  });

  it('should display the post image if available', () => {
    const postWithImage = posts[1];
    render(<RecentActivityCard post={postWithImage} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('should display the text content if no image is available', () => {
    render(<RecentActivityCard post={posts[0]} />);
    const textContent = screen.getByText(post.body);
    expect(textContent).toBeInTheDocument();
  });
});
