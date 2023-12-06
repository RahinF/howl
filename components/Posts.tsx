'use client';

import { getPosts } from '@/api/post';
import Post from '@/components/Post';
import Spinner from '@/components/Spinner';
import useOnScreen from '@/hooks/useOnScreen';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

interface Props {
  category?: string;
}

const postsPerPage = 5;

export default function Posts({ category }: Props) {
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['posts-test'],
    queryFn: ({ pageParam = 1 }) =>
      getPosts({ category, pageParam, postsPerPage }),
    initialPageParam: 1,
    getNextPageParam: (posts, _, lastPageParam) => {
      const hasPages = posts[posts.length - 1]?.postsAfter > 0;
      return hasPages ? lastPageParam + 1 : null;
    },
  });

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage]);

  return (
    <>
      {data.pages.map((page) =>
        page.map((post: Post) => (
          <Post
            key={post._id}
            post={post}
          />
        )),
      )}

      <div ref={ref}>{isFetchingNextPage && <Spinner />}</div>
    </>
  );
}
