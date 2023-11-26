import { getComments } from '@/api/comment';
import CommentCard from '@/components/CommentCard';
import CommentCardSkeleton from '@/components/CommentCardSkeleton';
import { Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const variants: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
        delay: 0.25,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
};

interface Props {
  postId: string;
}

const Comments = ({ postId }: Props) => {
  const [comments, setComments] = useState<PostComment[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const commentsLoaded = !loading && !!comments.length;

  useEffect(() => {
    (async () => {
      try {
        const comments = await getComments(postId);
        setComments(comments);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    })();
  }, [postId]);

  return (
    <motion.div
      key={comments}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="px-4 pb-4 max-h-80 hide-scrollbar h-auto overflow-y-scroll">
        <div className="divide-y divide-[#282D4A]">
          {loading && <CommentCardSkeleton />}
          {commentsLoaded &&
            comments.map((comment) => (
              <CommentCard
                key={comment._id}
                comment={comment}
              />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Comments;
