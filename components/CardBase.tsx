import { Card } from '@/components/ui/card';
import useCard from '@/hooks/useCard';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const CardBase = ({ className, children }: Props) => {
  const { addToRefs } = useCard();

  return (
    <Card
      className="card"
      ref={addToRefs}
    >
      <div className={cn('card-content', className)}>{children}</div>
    </Card>
  );
};

export default CardBase;
