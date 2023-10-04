import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

interface Props {}

const Comments = ({}: Props) => {
  return (
    <motion.div
      key={Math.random()}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollArea className="px-4 pb-4 h-52">
        <div className=" divide-y">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="py-4 flex gap-3"
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex gap-1 items-center">
                  <span className="text-lg font-semibold">Kratos</span>
                  <span className="font-bold">·</span>
                  <TimeAgo
                    className="text-sm text-muted-foreground"
                    date="Aug 29, 2023"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  qui nulla voluptatem consectetur molestias architecto dolorum
                  maiores magni sed placeat.
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  );
};

export default Comments;
