import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import IconButton from './IconButton';
import Tooltip from './Tooltip';

interface Props {
  isLiked: boolean;
  toggleLiked: () => void;
}

const MotionHeartIconSolid = motion(HeartIconSolid);
const MotionHeartIconOutline = motion(HeartIconOutline);

const iconVariants = {
  liked: {
    initial: { scale: 0.5 },
    animate: {
      scale: 1,
      transition: { type: 'spring', stiffness: 600, duration: 0.5 },
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      fill: ['#f87171', '#fff'],
      transition: {
        duration: 0.25,
        fill: { duration: 0.25 },
        scale: { duration: 0.15 },
        opacity: { delay: 0.15, duration: 0.1 },
      },
    },
  },
  unliked: {
    initial: { scale: 0.5 },
    animate: { scale: 1 },
    exit: {
      scale: 0.4,
      opacity: 0,
      transition: {
        duration: 0.3,
        scale: { duration: 0.2 },
        opacity: { delay: 0.2, duration: 0.1 },
      },
    },
  },
} satisfies Record<string, Variants>;

const LikeButton = ({ isLiked, toggleLiked }: Props) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const onClick = () => {
    !isDisabled && toggleLiked();
    setIsDisabled(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDisabled) {
      timer = setTimeout(() => {
        setIsDisabled(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isDisabled]);

  return (
    <Tooltip label={isLiked ? 'Unike' : 'Like'}>
      <IconButton
        className="disabled:opacity-100"
        onClick={onClick}
      >
        <AnimatePresence
          initial={false}
          mode="wait"
        >
          {isLiked ? (
            <MotionHeartIconSolid
              key={isLiked.toString()}
              className="h-6 w-6 text-red-400"
              variants={iconVariants.liked}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          ) : (
            <MotionHeartIconOutline
              key={isLiked.toString()}
              className="h-6 w-6 text-white"
              variants={iconVariants.unliked}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </AnimatePresence>
      </IconButton>
    </Tooltip>
  );
};

export default LikeButton;
