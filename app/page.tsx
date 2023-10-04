import MessageBox from '@/components/MessageBox';
import Post from '@/components/Post';
import RecentActivity from '@/components/RecentActivity';

export default function Home() {
  return (
    <main className="max-w-screen-xl min-h-screen m-auto py-4">
      <h1>Home</h1>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <h1>menu</h1>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 px-4 col-span-5">
          <MessageBox />
          <Post />
          <Post />
        </div>
        <div className="col-span-4">
          <RecentActivity />
        </div>
      </div>
    </main>
  );
}
