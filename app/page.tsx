import Layout from '@/components/Layout';
import Nav from '@/components/Nav';
import { client } from '@/sanity/lib/client';

const getPostsQuery = `
*[_type == "post"]{
    author->,
    _id,
    body,
    _createdAt,
    mainImage->
}`;

const getPosts = async () => {
  const response = client.fetch(getPostsQuery);
  return response;
};

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className="max-w-screen-xl min-h-screen m-auto pr-4 2xl:pr-0">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 h-screen fixed flex items-center">
          <Nav />
        </div>
        <div className="col-start-2 md:col-start-2 ml-10 md:ml-6 lg:ml-4 lg:col-start-2 xl:ml-14 xl:col-start-3 col-span-full">
          <Layout />
        </div>
      </div>
    </main>
  );
}
