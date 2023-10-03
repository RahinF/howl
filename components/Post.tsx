import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/outline';

interface Props {}

const Post = ({}: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-red-50 h-40 grid place-items-center">image</div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae
          velit nostrum architecto rerum iste voluptates sit quis perspiciatis
          tenetur.
        </p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none"
        >
          <ChatBubbleOvalLeftIcon className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none"
        >
          <HeartIcon className="h-6 w-6" />
        </Button>
      </CardFooter>
      <ScrollArea className="h-52 px-4 pb-4">
        <div className=" divide-y">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="py-4 flex gap-3"
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <span className="text-lg font-semibold">Kratos</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  qui nulla voluptatem consectetur molestias architecto dolorum
                  maiores magni sed placeat.
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default Post;
