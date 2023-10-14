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
import ReplyButton from './ReplyButton';
import Tooltip from './Tooltip';

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
    <CardBase className="p-4">
      <CardHeader className="flex-row gap-6 items-center space-y-0">
        <Avatar className="h-16 w-16">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start gap-1.5">
          <CardTitle className="text-white text-base">Kratos</CardTitle>
          {/* <span className="text-muted-foreground font-black">·</span> */}
          <CardDescription>
            <TimeAgo date="Aug 29, 2023" />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg">
          <img
            src="https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg"
            alt="turtle"
            className="rounded-[inherit]"
          />
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae
          velit nostrum architecto rerum iste voluptates sit quis perspiciatis
          tenetur.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex gap-4">
          <Tooltip label={`${showComments ? 'Hide' : 'Show'} comments`}>
            <IconButton
              onClick={toggleComments}
              aria-expanded={showComments}
              aria-label={`${showComments ? 'hide' : 'show'} comments`}
            >
              <ChatBubbleOvalLeftIcon
                className="h-6 w-6 text-white"
                aria-hidden
                focusable="false"
              />
            </IconButton>
          </Tooltip>

          <LikeButton
            isLiked={isLiked}
            toggleLiked={toggleLiked}
          />
        </div>

        <div>
          <ReplyButton />
        </div>
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
