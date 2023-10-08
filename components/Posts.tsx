'use client';

import { useEffect, useRef } from 'react';
import MessageBox from './MessageBox';
import Post from './Post';
import RecentActivity from './RecentActivity';

interface Props {}

const Posts = ({}: Props) => {
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

  return (
    <div
      ref={cardsRef}
      className="group grid grid-cols-9 gap-4"
    >
      <div className="col-span-5 flex flex-col gap-6 pt-4">
        <MessageBox addToRefs={addToRefs} />

        <div className="flex flex-col gap-6">
          {[...Array(10)].map((_, index) => (
            <Post
              key={index}
              addToRefs={addToRefs}
            />
          ))}
        </div>
      </div>

      <div className="col-span-4 pt-4">
        <RecentActivity addToRefs={addToRefs} />
      </div>
    </div>
  );
};

export default Posts;
