'use client';

import CardBase from '@/components/CardBase';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import ReactTimeago from 'react-timeago';
import Avatar from './Avatar';

interface Props {
  posts: Post[];
}

const RecentActivity = ({ posts }: Props) => {
  return (
    <CardBase>
      <CardHeader>
        <CardTitle className="text-white text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="mb-4 flex flex-col gap-8">
        {posts.map(({ user, content, date, image }, index) => (
          <div key={index}>
            <div className="flex gap-1 items-center">
              <Avatar
                className="h-8 w-8 mr-2"
                src={user.image}
                username={user.username}
              />
              <p className="text-sm font-medium leading-none text-white">
                {user.username}
              </p>
              <span className="font-black text-muted-foreground">·</span>
              <p className="text-xs text-muted-foreground">
                <ReactTimeago date={date} />
              </p>
            </div>
            <div className="w-full ">
              {image ? (
                <div className="rounded-lg mt-4">
                  <Image
                    src={image}
                    alt=""
                    width={260}
                    height={200}
                    className="h-auto w-full rounded-[inherit]"
                  />
                </div>
              ) : (
                <p className="mt-2 text-sm text-white line-clamp-2">
                  {content}
                </p>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </CardBase>
  );
};

export default RecentActivity;
