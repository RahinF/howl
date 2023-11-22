import { posts } from '@/app/constants';
import RecentActivity from '@/components/RecentActivity';
import { CardProvider } from '@/context/CardContext';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('RecentActivity', () => {
  it('should display the heading', () => {
    render(
      <CardProvider>
        <RecentActivity
          isLoading={false}
          posts={posts}
        />
      </CardProvider>,
    );
    const heading = screen.getByRole('heading', {
      name: /recent activity/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should display cards', () => {
    render(
      <CardProvider>
        <RecentActivity
          isLoading={false}
          posts={posts}
        />
      </CardProvider>,
    );
    const cards = screen.getAllByTestId('recent-activity-card');
    expect(cards).toHaveLength(posts.length);
  });
});
