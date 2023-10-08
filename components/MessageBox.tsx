'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { Input } from './ui/input';

interface Props {
  addToRefs: (element: HTMLDivElement) => void;
}

const MessageBox = ({ addToRefs }: Props) => {
  return (
    <Card
      className="card"
      ref={addToRefs}
    >
      <div className="card-content">
        <CardHeader className="pb-2">
          <CardTitle className="mb-4 text-white">
            Tell the world what&apos;s happening!
          </CardTitle>
        </CardHeader>

        <CardContent className="flex justify-between gap-3">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1 flex gap-3">
            <Input
              placeholder="Type your message here."
              className="border-none"
            />
            <label htmlFor="file">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-none"
              >
                <PhotoIcon className="h-6 w-6" />
              </Button>
            </label>
            <input
              id="file"
              type="file"
              className="hidden"
            />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default MessageBox;
