'use client';

import CardBase from '@/components/CardBase';
import IconButton from '@/components/IconButton';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

interface Props {}

const MessageBox = ({}: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const fileSelectOnClick = () => {
    inputFileRef.current?.click();
  };

  return (
    <CardBase>
      <CardHeader className="pb-2">
        <CardTitle className="mb-4 text-white text-lg">
          Tell the world what&apos;s happening!
        </CardTitle>
      </CardHeader>

      <CardContent className="flex justify-between gap-3 items-center">
        <IconButton onClick={fileSelectOnClick}>
          <PhotoIcon className="h-6 w-6 text-white" />
        </IconButton>

        <Input
          placeholder="Type your message here."
          className="border-none bg-[#282D4A] text-white"
        />

        <IconButton>
          <PaperAirplaneIcon className="h-6 w-6 text-white" />
        </IconButton>

        <input
          id="file"
          type="file"
          className="hidden"
          ref={inputFileRef}
        />
      </CardContent>
    </CardBase>
  );
};

export default MessageBox;
