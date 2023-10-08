'use client';

import MessageBox from '@/components/MessageBox';
import Post from '@/components/Post';
import RecentActivity from '@/components/RecentActivity';
import useCard from '@/hooks/useCard';

interface Props {}

const Layout = ({}: Props) => {
  const { cardsRef } = useCard();

  return (
    <div
      ref={cardsRef}
      className="group grid grid-cols-9 gap-4"
    >
      <div className="col-span-5 flex flex-col gap-6 pt-4">
        <MessageBox />

        <div className="flex flex-col gap-6">
          {[...Array(10)].map((_, index) => (
            <Post key={index} />
          ))}
        </div>
      </div>

      <div className="col-span-4 pt-4">
        <RecentActivity />
      </div>
    </div>
  );
};

export default Layout;
