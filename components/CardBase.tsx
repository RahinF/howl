import { Card } from '@/components/ui/card';
import useCard from '@/hooks/useCard';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CardBase = ({ children }: Props) => {
  const { addToRefs } = useCard();

  return (
    <Card
      className="card"
      ref={addToRefs}
    >
      <div className="card-content">{children}</div>
    </Card>
  );
};

export default CardBase;
