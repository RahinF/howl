'use client';

import { addPost } from '@/api/post';
import { comments } from '@/app/constants';
import AddPostForm from '@/components/AddPostForm';
import CardBaseContainer from '@/components/CardBaseContainer';
import Post from '@/components/Post';
import PostSkeleton from '@/components/PostSkeleton';
import RecentActivity from '@/components/RecentActivity';
import { CardProvider } from '@/context/CardContext';
import capitalizeFirstLetter from '@/lib/capitalizeFirstLetter';
import { client } from '@/sanity/lib/client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const getPostsQuery = (category?: string) => {
  if (category === 'trending') {
    category = '';
  }

  const query = `
*[_type == "post" ${
    category ? `&& category->title == "${capitalizeFirstLetter(category)}"` : ''
  }] | order(_createdAt desc) {
  _id, 
  body, 
  _createdAt, 
  "mainImage":mainImage->url,
  author->{  
    _id,
    username,
    "avatar": avatar.asset->url
    }
  }`;
  return query;
};

interface Props {
  category?: string;
}

export default function Layout({ category }: Props) {
  const { data: session } = useSession();

  const [posts, setPosts] = useState<Post[] | []>([]);
  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const query = getPostsQuery(category);
        const posts = await client.fetch(query);
        setPosts(posts);
      } catch (error) {
      } finally {
        setisLoading(false);
      }
    };

    getPosts();
  }, [category]);

  return (
    <CardProvider>
      <CardBaseContainer className="grid grid-cols-9 gap-6">
        <div className="md:col-span-8 lg:col-span-6 flex flex-col gap-6 py-4 col-span-full">
          {session && <AddPostForm addPost={addPost} />}

          <div className="flex flex-col gap-6">
            {isLoading &&
              [...Array(10)].map((_, index) => <PostSkeleton key={index} />)}

            {!isLoading &&
              !!posts.length &&
              posts.map((post) => (
                <Post
                  key={post._id}
                  post={post}
                  comments={comments}
                />
              ))}
          </div>
        </div>

        <div className="col-span-3 pt-4 hidden lg:block">
          <RecentActivity
            posts={posts.slice(0, 3)}
            isLoading={isLoading}
          />
        </div>
      </CardBaseContainer>
    </CardProvider>
  );
}
