'use client';

import { addPost } from '@/api/post';
import { posts } from '@/app/constants';
import MessageBox from '@/components/MessageBox';
import Post from '@/components/Post';
import RecentActivity from '@/components/RecentActivity';
import CardBaseContainer from './CardBaseContainer';

interface Props {}

const Layout = ({}: Props) => {
  return (
    <CardBaseContainer className="grid grid-cols-9 gap-6">
      <div className="md:col-span-8 lg:col-span-6 flex flex-col gap-6 py-4 col-span-full">
        <MessageBox addPost={addPost} />

        <div className="flex flex-col gap-6">
          {posts.map((post, index) => (
            <Post
              key={index}
              post={post}
            />
          ))}
        </div>
      </div>

      <div className="col-span-3 pt-4 hidden lg:block">
        <RecentActivity posts={posts.slice(0, 3)} />
      </div>
    </CardBaseContainer>
  );
};

export default Layout;
