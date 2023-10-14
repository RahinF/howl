import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  CustomDomComponent,
  Variants,
  motion,
  HTMLMotionProps,
} from 'framer-motion';
import { ReactNode, RefAttributes, forwardRef } from 'react';

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

interface ButtonProps
  extends CustomDomComponent<
    HTMLMotionProps<'button'> & RefAttributes<HTMLButtonElement>
  > {
  children: ReactNode;
  className?: string;
  type: 'button' | 'reset' | 'submit' | undefined;
}

const IconButton = forwardRef<HTMLButtonElement, any>(
  ({ children, className, type = 'button', ...props }, ref) => {
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
        ref={ref}
      >
        {children}
      </MotionButton>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
