'use client';

import Comments from '@/components/Comments';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import TimeAgo from 'react-timeago';

import { motion } from 'framer-motion';
import { ScrollArea } from './ui/scroll-area';

interface Props {}

const Post = ({}: Props) => {
  const [showComments, setShowComments] = useState<boolean>(false);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };
  const MotionScrollArea = motion(ScrollArea);
  return (
    <Card>
      <CardHeader className="flex-row gap-3 space-y-0">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>Kratos</CardTitle>
          <CardDescription>
            <TimeAgo date="Aug 29, 2023" />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-red-50 h-40 grid place-items-center rounded-lg">
          image
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae
          velit nostrum architecto rerum iste voluptates sit quis perspiciatis
          tenetur.
        </p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none"
          onClick={toggleComments}
        >
          <ChatBubbleOvalLeftIcon className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none"
        >
          <HeartIcon className="h-6 w-6" />
        </Button>
      </CardFooter>
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {showComments && <Comments />}
      </AnimatePresence>
    </Card>
  );
};

export default Post;
