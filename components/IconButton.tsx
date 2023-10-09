import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaExpanded?: boolean;
  ariaLabel?: string;
}
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
  onClick,
  ariaExpanded,
  ariaLabel,
}: Props) => {
  return (
    <MotionButton
      variant="outline"
      size="icon"
      className={cn(
        'shrink-0 rounded-full h-12 duration-500 w-12 border-none bg-[#282D4A] hover:bg-[#141627]',
        className,
      )}
      variants={buttonVariants}
      whileHover="whileHover"
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      {children}
    </MotionButton>
  );
};

export default IconButton;
