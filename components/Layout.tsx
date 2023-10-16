'use client';

import { post, user } from '@/app/constants';
import MessageBox from '@/components/MessageBox';
import Post from '@/components/Post';
import RecentActivity from '@/components/RecentActivity';
import CardBaseContainer from './CardBaseContainer';

interface Props {}

const Layout = ({}: Props) => {
  return (
    <CardBaseContainer className="grid grid-cols-9 gap-6">
      <div className="md:col-span-8 lg:col-span-5 flex flex-col gap-6 py-4 col-span-full">
        <MessageBox />

        <div className="flex flex-col gap-6">
          {[...Array(10)].map((_, index) => (
            <Post
              key={index}
              user={user}
              post={post}
            />
          ))}
        </div>
      </div>

      <div className="col-span-4 pt-4 hidden lg:block">
        <div className="fixed top-4">
          <RecentActivity />
        </div>
      </div>
    </CardBaseContainer>
  );
};

export default Layout;
