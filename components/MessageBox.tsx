'use client';

import CardBase from '@/components/CardBase';
import IconButton from '@/components/IconButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PhotoIcon } from '@heroicons/react/24/outline';

interface Props {}

const MessageBox = ({}: Props) => {
  return (
    <CardBase>
      <CardHeader className="pb-2">
        <CardTitle className="mb-4 text-white text-lg">
          Tell the world what&apos;s happening!
        </CardTitle>
      </CardHeader>

      <CardContent className="flex justify-between gap-3 items-center">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Input
          placeholder="Type your message here."
          className="border-none bg-[#282D4A] text-white"
        />
        <label htmlFor="file">
          <IconButton>
            <PhotoIcon className="h-6 w-6 text-white" />
          </IconButton>
        </label>
        <input
          id="file"
          type="file"
          className="hidden"
        />
      </CardContent>
    </CardBase>
  );
};

export default MessageBox;
