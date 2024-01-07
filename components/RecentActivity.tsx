'use client';

import CardBase from '@/components/CardBase';
import RecentActivityCard from '@/components/RecentActivityCard';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getRecentActivity } from '@/requests/post';
import { useSuspenseQuery } from '@tanstack/react-query';

const RecentActivity = () => {
  const { data: posts } = useSuspenseQuery({
    queryKey: ['recent-activity'],
    queryFn: () => getRecentActivity(),
  });

  return (
    <CardBase>
      <CardHeader>
        <CardTitle className="text-white text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="mb-4 flex flex-col gap-8">
        {posts.map((post) => (
          <RecentActivityCard
            post={post}
            key={post._id}
          />
        ))}
      </CardContent>
    </CardBase>
  );
};

export default RecentActivity;
