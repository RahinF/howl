'use client';

import { addPost } from '@/api/post';
import { comments, posts } from '@/app/constants';
import AddPostForm from '@/components/AddPostForm';
import CardBaseContainer from '@/components/CardBaseContainer';
import Post from '@/components/Post';
import RecentActivity from '@/components/RecentActivity';
import { CardProvider } from '@/context/CardContext';
import { useSession } from 'next-auth/react';

interface Props {}

export default function Layout({}: Props) {
  const { data: session } = useSession();

  console.log(session)

  return (
    <CardProvider>
      <CardBaseContainer className="grid grid-cols-9 gap-6">
        <div className="md:col-span-8 lg:col-span-6 flex flex-col gap-6 py-4 col-span-full">
          {session && <AddPostForm addPost={addPost} />}

          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                comments={comments}
              />
            ))}
          </div>
        </div>

        <div className="col-span-3 pt-4 hidden lg:block">
          <RecentActivity posts={posts.slice(0, 3)} />
        </div>
      </CardBaseContainer>
    </CardProvider>
  );
}
