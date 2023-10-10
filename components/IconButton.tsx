import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';

const MotionButton = motion(Button);

const buttonVariants: Variants = {
  whileHover: {
    scale: 1.2,
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
  },
};

const IconButton = ({
  children,
  className,
  type = 'button',
  ...props
}: any) => {
  return (
    <MotionButton
      {...props}
      variant="outline"
      size="icon"
      className={cn(
        'shrink-0 rounded-full h-12 duration-500 w-12 border-none bg-[#282D4A] hover:bg-[#141627]',
        className,
      )}
      variants={buttonVariants}
      whileHover="whileHover"
      type={type}
    >
      {children}
    </MotionButton>
  );
};

export default IconButton;


