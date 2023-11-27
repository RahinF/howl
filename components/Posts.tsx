'use client';

import { getPosts } from '@/api/post';
import Post from '@/components/Post';
import { useSuspenseQuery } from '@tanstack/react-query';

interface Props {
  category?: string;
}

export default function Posts({ category }: Props) {
  const { data: posts } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(category),
  });

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post._id}
          post={post}
        />
      ))}
    </>
  );
}
