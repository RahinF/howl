import MessageBox from '@/components/MessageBox';
import Nav from '@/components/Nav';
import Post from '@/components/Post';
import RecentActivity from '@/components/RecentActivity';

export default function Home() {
  return (
    <main className="max-w-screen-xl min-h-screen m-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 h-screen fixed flex items-center">
          <Nav />
        </div>
        <div className="flex flex-col gap-4 px-4 col-span-5 col-start-4 pt-4">
          <MessageBox />
          <Post />
          <Post />
        </div>
        <div className="col-span-4 pt-4">
          <RecentActivity />
        </div>
      </div>
    </main>
  );
}
