import { ReactNode, RefObject, createContext, useEffect, useRef } from 'react';

interface ContextProps {
  cardsRef: RefObject<HTMLDivElement>;
  addToRefs: (element: HTMLDivElement) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const CardContext = createContext<ContextProps | undefined>(undefined);

const CardProvider = ({ children }: ProviderProps) => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (element: HTMLDivElement) => {
    if (element && !cardRefs.current.includes(element)) {
      cardRefs.current.push(element);
    }
  };

  useEffect(() => {
    cardsRef.current?.addEventListener('mousemove', ({ clientX, clientY }) => {
      cardRefs.current.forEach((cardRef) => {
        const { left, top } = cardRef.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;

        cardRef.style.setProperty('--mouse-x', `${x}px`);
        cardRef.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }, []);

  const value = { cardsRef, addToRefs };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export { CardContext, CardProvider };
