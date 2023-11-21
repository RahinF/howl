'use client';

import CardBase from '@/components/CardBase';
import RecentActivityCard from '@/components/RecentActivityCard';
import RecentActivitySkeletonCard from '@/components/RecentActivitySkeletonCard';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  posts: Post[];
  isLoading: boolean;
}

const RecentActivity = ({ posts, isLoading }: Props) => {
  const postsLoaded = !isLoading && !!posts.length;

  return (
    <CardBase>
      <CardHeader>
        <CardTitle className="text-white text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="mb-4 flex flex-col gap-8">
        {isLoading &&
          [...Array(3)].map((_, index) => (
            <RecentActivitySkeletonCard key={index} />
          ))}

        {postsLoaded &&
          posts.map((post) => (
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
