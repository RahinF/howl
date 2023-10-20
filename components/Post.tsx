'use client';

import Avatar from '@/components/Avatar';
import CardBase from '@/components/CardBase';
import CommentButton from '@/components/CommentButton';
import Comments from '@/components/Comments';
import LikeButton from '@/components/LikeButton';
import ReplyButton from '@/components/ReplyButton';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import TimeAgo from 'react-timeago';

interface Props {
  post: Post;
  comments: PostComment[];
}

const Post = ({ post, comments }: Props) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const hasComments = !!comments.length;

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const toggleLiked = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <CardBase className="sm:p-4">
      <CardHeader className="flex-row gap-4 items-center space-y-0">
        <Avatar
          src={post.user.image}
          username={post.user.username}
          className="h-12 w-12"
        />

        <div className="flex flex-col">
          <CardTitle className="text-white text-base">
            {post.user.username}
          </CardTitle>

          <CardDescription>
            <TimeAgo date={post.date} />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {post.image && (
          <div className="rounded-lg">
            <Image
              src={post.image}
              alt="turtle"
              width={644}
              height={483}
              className="rounded-[inherit]"
            />
          </div>
        )}
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-white">
          {post.content}
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex gap-4">
          {hasComments && (
            <CommentButton
              showComments={showComments}
              toggleComments={toggleComments}
            />
          )}

          <LikeButton
            isLiked={isLiked}
            toggleLiked={toggleLiked}
          />
        </div>

        <div>
          <ReplyButton replyTo={post} />
        </div>
      </CardFooter>
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {showComments && (
          <Comments
            animationKey={showComments.toString()}
            comments={comments}
          />
        )}
      </AnimatePresence>
    </CardBase>
  );
};

export default Post;
