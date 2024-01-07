import CommentCard from '@/components/CommentCard';
import { getComments } from '@/requests/comment';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Variants, motion } from 'framer-motion';

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
  const { data: comments } = useSuspenseQuery({
    queryKey: ['comment', postId],
    queryFn: () => getComments(postId),
  });

  return (
    <motion.div
      key={postId}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="px-4 pb-4 max-h-80 hide-scrollbar h-auto overflow-y-scroll">
        <div className="divide-y divide-[#282D4A]">
          {comments.map((comment) => (
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
