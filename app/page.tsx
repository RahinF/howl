import Post from '@/components/Post';

export default function Home() {
  return (
    <main className="max-w-screen-xl min-h-screen m-auto border">
      <h1>Home</h1>

      <div className="grid grid-cols-3">
        <div>
          <h1>menu</h1>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
        <div className="p-4">
          <h1>feed</h1>
          <div>message box</div>
          <Post />
        </div>
        <div>
          <h1>widgets</h1>
          <div>user control</div>
          <div>recent</div>
        </div>
      </div>
    </main>
  );
}
