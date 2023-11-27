'use client';

import { addPost } from '@/api/post';
import AddPostForm from '@/components/AddPostForm';
import CardBaseContainer from '@/components/CardBaseContainer';
import Posts from '@/components/Posts';
import PostsSkeleton from '@/components/PostsSkeleton';
import RecentActivity from '@/components/RecentActivity';
import RecentActivitySkeleton from '@/components/RecentActivitySkeleton';
import { CardProvider } from '@/context/CardContext';
import { useSession } from 'next-auth/react';
import { Suspense } from 'react';

interface Props {
  category?: string;
}

export default function Layout({ category }: Props) {
  const { data: session } = useSession();

  return (
    <CardProvider>
      <CardBaseContainer className="grid grid-cols-9 gap-6">
        <div className="md:col-span-8 lg:col-span-6 flex flex-col gap-6 py-4 col-span-full">
          {session && <AddPostForm addPost={addPost} />}

          <div className="flex flex-col gap-6">
            <Suspense fallback={<PostsSkeleton quantity={10} />}>
              <Posts category={category} />
            </Suspense>
          </div>
        </div>

        <div className="col-span-3 pt-4 hidden lg:block">
          <Suspense fallback={<RecentActivitySkeleton quantity={3} />}>
            <RecentActivity />
          </Suspense>
        </div>
      </CardBaseContainer>
    </CardProvider>
  );
}
