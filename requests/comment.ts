import { client } from '@/sanity/lib/client';
import { SanityDocument } from 'next-sanity';

interface AddCommentProps {
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

export type AddComment = ({
  comment,
  userId,
  postId,
}: AddCommentProps) => ReturnType;

export const addComment = async ({
  comment,
  userId,
  postId,
}: AddCommentProps) => {
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

export const getCommentsQuery = (postId: string) => {
  const query = `*[_type == "comment" && post->_id == "${postId}"] | order(_createdAt desc){
      author->{
        username, 
        "avatar": avatar.asset->url
      },
        _createdAt,
        _id,
        body
      }`;
  return query;
};

export const getComments = async (postId: string) => {
  const query = getCommentsQuery(postId);
  const comments: PostComment[] = await client.fetch(query);
  return comments;
};
