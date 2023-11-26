'use client';

import { addPost, getPosts } from '@/api/post';
import AddPostForm from '@/components/AddPostForm';
import CardBaseContainer from '@/components/CardBaseContainer';
import Post from '@/components/Post';
import PostSkeleton from '@/components/PostSkeleton';
import RecentActivity from '@/components/RecentActivity';
import { CardProvider } from '@/context/CardContext';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface Props {
  category?: string;
}

export default function Layout({ category }: Props) {
  const { data: session } = useSession();

  const [posts, setPosts] = useState<Post[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const postsLoaded = !loading && !!posts.length;

  useEffect(() => {
    (async () => {
      try {
        const posts = await getPosts(category);
        setPosts(posts);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    })();
  }, [category]);

  return (
    <CardProvider>
      <CardBaseContainer className="grid grid-cols-9 gap-6">
        <div className="md:col-span-8 lg:col-span-6 flex flex-col gap-6 py-4 col-span-full">
          {session && <AddPostForm addPost={addPost} />}

          <div className="flex flex-col gap-6">
            {loading &&
              [...Array(10)].map((_, index) => <PostSkeleton key={index} />)}

            {postsLoaded &&
              posts.map((post) => (
                <Post
                  key={post._id}
                  post={post}
                />
              ))}
          </div>
        </div>

        <div className="col-span-3 pt-4 hidden lg:block">
          <RecentActivity
            posts={posts.slice(0, 3)}
            isLoading={loading}
          />
        </div>
      </CardBaseContainer>
    </CardProvider>
  );
}
