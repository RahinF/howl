import { Button } from '@/components/ui/button';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  isLiked: boolean;
  toggleLiked: () => void;
}

const MotionButton = motion(Button);
const MotionHeartIconSolid = motion(HeartIconSolid);
const MotionHeartIconOutline = motion(HeartIconOutline);

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
    <MotionButton
      variant="outline"
      size="icon"
      className="disabled:opacity-100 rounded-full h-12 duration-500 w-12 border-none bg-[#282D4A] hover:bg-[#141627]"
      whileHover={{
        scale: 1.1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 15,
          backgroundColor: {
            duration: 0.1,
          },
          scale: {
            duration: 0.25,
            delay: 0.1,
          },
        },
      }}
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
            initial={{ scale: 0.5 }}
            animate={{
              scale: 1,
              transition: { type: 'spring', stiffness: 600, duration: 0.5 },
            }}
            exit={{
              scale: 0.5,
              opacity: 0,
              fill: ['#f87171', '#fff'],
              transition: {
                duration: 0.25,
                fill: { duration: 0.25 },
                scale: { duration: 0.15 },
                opacity: { delay: 0.15, duration: 0.1 },
              },
            }}
          />
        ) : (
          <MotionHeartIconOutline
            key={isLiked.toString()}
            className="h-6 w-6 text-white"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0.4,
              opacity: 0,
              transition: {
                duration: 0.3,
                scale: { duration: 0.2 },
                opacity: { delay: 0.2, duration: 0.1 },
              },
            }}
          />
        )}
      </AnimatePresence>
    </MotionButton>
  );
};

export default LikeButton;
