'use client';

import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { PhotoIcon } from '@heroicons/react/24/outline';

interface Props {}

const MessageBox = ({}: Props) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <Textarea
          placeholder="Type your message here."
          className="resize-none"
        />
      </CardHeader>
      <CardFooter className="justify-between pb-2">
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
        <Button>Post</Button>
      </CardFooter>
    </Card>
  );
};

export default MessageBox;
