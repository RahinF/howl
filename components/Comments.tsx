import Avatar from '@/components/Avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Variants, motion } from 'framer-motion';
import TimeAgo from 'react-timeago';

const variants: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: '208px',
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
  animationKey: boolean;
}

const Comments = ({ animationKey }: Props) => {
  return (
    <motion.div
      key={animationKey.toString()}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollArea className="px-4 pb-4 h-52">
        <div>
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="comment"
            >
              <div className="py-4 flex gap-3">
                <Avatar
                  username="Gun Dam"
                  src="https://images.pexels.com/photos/16341605/pexels-photo-16341605/free-photo-of-gundam-action-figure.jpeg"
                />

                <div>
                  <div className="flex gap-2 items-center">
                    <span className="text-white font-semibold">Kratos</span>
                    <span className="font-black text-muted-foreground">·</span>
                    <TimeAgo
                      className="text-sm text-muted-foreground"
                      date="Aug 29, 2023"
                    />
                  </div>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    qui nulla voluptatem consectetur molestias architecto
                    dolorum maiores magni sed placeat.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  );
};

export default Comments;
