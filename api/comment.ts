import { client } from '@/sanity/lib/client';
import { SanityDocument } from 'next-sanity';

interface Props {
  comment: string;
  userId?: string;
  postId: string;
}

type ReturnType = Promise<
  SanityDocument<{
    _type: string;
    body: string;
    author: {
      _ref: string | undefined;
      _type: string;
    };
    post: {
      _ref: string;
      _type: string;
    };
  }>
>;

export type AddComment = ({ comment, userId, postId }: Props) => ReturnType;

export const addComment = async ({ comment, userId, postId }: Props) => {
  const doc = {
    _type: 'comment',
    body: comment,
    author: { _ref: userId, _type: 'reference' },
    post: { _ref: postId, _type: 'reference' },
  };
  return await client.create(doc, {
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  });
};
