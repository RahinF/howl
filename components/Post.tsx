'use client';

import CardBase from '@/components/CardBase';
import Comments from '@/components/Comments';
import IconButton from '@/components/IconButton';
import LikeButton from '@/components/LikeButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import TimeAgo from 'react-timeago';

interface Props {}

const Post = ({}: Props) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const toggleLiked = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <CardBase>
      <CardHeader className="flex-row gap-3 space-y-0">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2">
          <CardTitle className="text-white text-base">Kratos</CardTitle>
          <span className="text-muted-foreground font-black">·</span>
          <CardDescription>
            <TimeAgo date="Aug 29, 2023" />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-[#282D4A] h-40 grid place-items-center rounded-lg">
          <p className="text-white tracking-widest uppercase text-sm text-muted-foreground">
            image
          </p>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae
          velit nostrum architecto rerum iste voluptates sit quis perspiciatis
          tenetur.
        </p>
      </CardContent>
      <CardFooter className="gap-3">
        <IconButton onClick={toggleComments}>
          <ChatBubbleOvalLeftIcon className="h-6 w-6 text-white" />
        </IconButton>

        <LikeButton
          isLiked={isLiked}
          toggleLiked={toggleLiked}
        />
      </CardFooter>
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {showComments && <Comments animationKey={showComments} />}
      </AnimatePresence>
    </CardBase>
  );
};

export default Post;
