import CommentCard from '@/components/CommentCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Variants, motion } from 'framer-motion';

const COMMENT_SECTION_HEIGHT = '300px';

const variants: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: COMMENT_SECTION_HEIGHT,
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
  animationKey: string;
  comments: PostComment[];
}

const Comments = ({ animationKey, comments }: Props) => {
  return (
    <motion.div
      key={animationKey}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollArea
        className="px-4 pb-4"
        style={{ height: COMMENT_SECTION_HEIGHT }}
      >
        <div className="divide-y divide-[#282D4A]">
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  );
};

export default Comments;
