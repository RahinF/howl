'use client';

import Avatar from '@/components/Avatar';
import CardBase from '@/components/CardBase';
import CommentButton from '@/components/CommentButton';
import Comments from '@/components/Comments';
import LikeButton from '@/components/LikeButton';
import OptionsButton from '@/components/OptionsButton';
import ReplyButton from '@/components/ReplyButton';
import Spinner from '@/components/Spinner';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { client } from '@/sanity/lib/client';
import { useMutation } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Suspense, useCallback, useEffect, useState } from 'react';
import TimeAgo from 'react-timeago';

interface Props {
  post: Post;
}

export default function Post({ post }: Props) {
  const { data: session } = useSession();
  const addLikeMutation = useMutation({
    mutationFn: () =>
      client
        .patch(post._id)
        .setIfMissing({ likes: [] })
        .insert('after', 'likes[-1]', [
          { _ref: session?.user?.id, _type: 'reference' },
        ])
        .commit({ autoGenerateArrayKeys: true }),
  });

  const removeLikeMutation = useMutation({
    mutationFn: ({ key }: { key: string }) =>
      client
        .patch(post._id)
        .unset([`likes[_key=="${key}"]`])
        .commit({}),
  });

  const [showComments, setShowComments] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const [commentCount, setCommentCount] = useState<number>(post.commentCount);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const findUser = useCallback(() => {
    if (!session?.user || post.likes === null) return;
    const user = post.likes.find((user) => user._id === session.user?.id);
    return user;
  }, [post.likes, session]);

  const toggleLiked = () => {
    if (!isLiked) {
      addLikeMutation.mutate();
    }

    if (isLiked) {
      const userLike = findUser();
      userLike && removeLikeMutation.mutate({ key: userLike._key });
    }
    setIsLiked((prev) => !prev);
  };

  useEffect(() => {
    const isLiked = findUser();
    setIsLiked(!!isLiked);
  }, [findUser]);

  return (
    <CardBase className="sm:p-4">
      <CardHeader className="flex-row gap-4 items-center space-y-0">
        <Avatar
          src={post.author.avatar}
          username={post.author.username}
          className="h-12 w-12"
        />

        <div className="flex flex-col">
          <CardTitle className="text-white text-base">
            {post.author.username}
          </CardTitle>

          <CardDescription>
            <TimeAgo
              data-testid="post-date"
              date={post._createdAt}
            />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {post.mainImage && (
          <div className="rounded-lg">
            <Image
              src={post.mainImage}
              alt={`${post._id}'s image`}
              width={644}
              height={483}
              className="rounded-[inherit]"
            />
          </div>
        )}
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-white">
          {post.body}
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex gap-4">
          <CommentButton
            showComments={showComments}
            toggleComments={toggleComments}
            commentCount={commentCount}
          />

          {session && (
            <>
              <LikeButton
                isLiked={isLiked}
                toggleLiked={toggleLiked}
              />

              <ReplyButton
                replyTo={post}
                setCommentCount={setCommentCount}
              />
            </>
          )}
        </div>

        {session && session.user?.id === post.author._id && (
          <OptionsButton post={post} />
        )}
      </CardFooter>
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {showComments && (
          <Suspense fallback={<Spinner />}>
            <Comments postId={post._id} />
          </Suspense>
        )}
      </AnimatePresence>
    </CardBase>
  );
}
