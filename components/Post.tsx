import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
    </Card>
  );
};

export default Post;
