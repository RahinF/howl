'use client';

import { CardProvider } from '@/context/CardContext';
import Layout from '@/components/Layout';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <main className="max-w-screen-xl min-h-screen m-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 h-screen fixed flex items-center">
          <Nav />
        </div>
        <div className="col-start-4 col-span-full">
          <CardProvider>
            <Layout />
          </CardProvider>
        </div>
      </div>
    </main>
  );
}
