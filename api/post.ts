import capitalizeFirstLetter from '@/lib/capitalizeFirstLetter';
import { client } from '@/sanity/lib/client';
import { SanityDocument } from 'next-sanity';

interface AddPostProps {
  values: {
    comment: string;
    category: string;
    file?: File;
  };
  userId?: string;
}

type AddPostReturnType = Promise<SanityDocument<Record<string, any>>>;

export type AddPost = ({ values, userId }: AddPostProps) => AddPostReturnType;

export const addPost = async ({ values, userId }: AddPostProps) => {
  let fileResponse;
  if (values.file) {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/assets/images/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
      {
        method: 'POST',
        body: values.file,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN!}`,
        },
      },
    );
    fileResponse = await response.json();
  }

  const doc = {
    _type: 'post',
    body: values.comment,
    author: { _ref: userId, _type: 'reference' },
    category: { _ref: values.category, _type: 'reference' },
    ...(fileResponse && {
      mainImage: {
        _ref: fileResponse.document._id,
        _type: 'reference',
      },
    }),
  };
  return await client.create(doc, {
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  });
};

export const getPostsQuery = (category?: string) => {
  if (category === 'trending') {
    category = '';
  }

  const getPostsQuery = `
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
    },
    "commentCount": count(*[ _type == "comment" && ^._id == post->_id])
  }`;
  return getPostsQuery;
};

export const getPosts = async (category?: string): Promise<Post[]> =>
  await client.fetch(getPostsQuery(category));

const getRecentActivityQuery = `
  *[_type == "post"] | order(_createdAt desc)[0..2] {
    _id, 
    body, 
    _createdAt, 
    "mainImage":mainImage->url,
    author->{  
      _id,
      username,
      "avatar": avatar.asset->url
      },
    }`;

export const getRecentActivity = async (): Promise<Post[]> =>
  await client.fetch(getRecentActivityQuery);
