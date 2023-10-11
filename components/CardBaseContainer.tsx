import useCard from '@/hooks/useCard';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const CardBaseContainer = ({ className, children }: Props) => {
  const { cardsRef } = useCard();

  return (
    <div
      ref={cardsRef}
      className={cn('group', className)}
    >
      {children}
    </div>
  );
};

export default CardBaseContainer;
