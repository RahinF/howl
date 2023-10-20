'use client';

import CardBase from '@/components/CardBase';
import RecentActivityCard from '@/components/RecentActivityCard';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  posts: Post[];
}

const RecentActivity = ({ posts }: Props) => {
  return (
    <CardBase>
      <CardHeader>
        <CardTitle className="text-white text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="mb-4 flex flex-col gap-8">
        {posts.map((post) => (
          <RecentActivityCard
            post={post}
            key={post.date.toString()}
          />
        ))}
      </CardContent>
    </CardBase>
  );
};

export default RecentActivity;
