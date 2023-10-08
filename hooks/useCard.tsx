import { CardContext } from '@/context/CardContext';
import { useContext } from 'react';

const useCard = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCard must be used within a CardProvider.');
  }

  return context;
};

export default useCard;
